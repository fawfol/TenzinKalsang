<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Receive input
$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['score'], $data['jumps'], $data['timer'], $data['map'])) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

$score = (int)$data['score'];
$jumps = (int)$data['jumps'];
$timer = (int)$data['timer'];
$map = $data['map'];

$allowed_maps = ['easy', 'medium', 'hard', 'extreme', 'fling'];
if (!in_array($map, $allowed_maps)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid map name"]);
    exit;
}

$filename = "scores_$map.txt";

// Read existing scores
$entries = [];
if (file_exists($filename)) {
    $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        list($s, $j, $t) = explode(",", $line);
        $entries[] = ["score" => (int)$s, "jumps" => (int)$j, "timer" => (int)$t];
    }
}

// Add new score
$entries[] = ["score" => $score, "jumps" => $jumps, "timer" => $timer];

// Sort by score descending
// Sort by score DESC, then timer ASC, then jumps ASC
usort($entries, function($a, $b) {
    // First: sort by score (higher is better)
    if ($a['score'] !== $b['score']) {
        return $b['score'] - $a['score'];
    }
    // Then: sort by timer (lower is better)
    if ($a['timer'] !== $b['timer']) {
        return $a['timer'] - $b['timer'];
    }
    // Finally: sort by jumps (lower is better)
    return $a['jumps'] - $b['jumps'];
});

// Keep only top 30
$entries = array_slice($entries, 0, 30);

// Save back to file
$linesToWrite = array_map(fn($e) => "{$e['score']},{$e['jumps']},{$e['timer']}", $entries);
file_put_contents($filename, implode("\n", $linesToWrite));

echo json_encode(["success" => true]);
?>
