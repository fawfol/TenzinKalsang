<?php
header("Content-Type: application/json");

$map = $_GET['map'] ?? 'easy';
$allowed_maps = ['easy', 'medium', 'hard', 'extreme', 'fling'];

if (!in_array($map, $allowed_maps)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid map"]);
    exit;
}

$filename = "scores_$map.txt";
$scores = [];

if (file_exists($filename)) {
    $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        list($score, $jumps, $timer) = explode(",", $line);
        $scores[] = [
            "score" => (int)$score,
            "jumps" => (int)$jumps,
            "timer" => (int)$timer
        ];
    }
}

echo json_encode($scores);
?>
