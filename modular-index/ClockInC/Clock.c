#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <unistd.h>

#define COLOR_CYAN "\x1b[36m"
#define COLOR_RESET "\x1b[0m"

#define DIGIT_HEIGHT 5
#define DIGIT_WIDTH 7

const char* digits[10][DIGIT_HEIGHT] = {
    {" ##### ", "#     #", "#     #", "#     #", " ##### "},
    {"  #    ", " ##    ", "  #    ", "  #    ", " ###   "}, 
    {" ##### ", "     # ", " ##### ", "#      ", " ##### "},
    {" ##### ", "     # ", "  #### ", "     # ", " ##### "},
    {"#     #", "#     #", " ##### ", "      #", "      #"},
    {" ##### ", "#      ", " ####  ", "      #", " ##### "},
    {" ##### ", "#      ", " ##### ", "#     #", " ##### "}, 
    {" ##### ", "      #", "     # ", "    #  ", "   #   "}, 
    {" ##### ", "#     #", " ##### ", "#     #", " ##### "},
    {" ##### ", "#     #", " ##### ", "      #", " ##### "} 
};

const char* colon[DIGIT_HEIGHT] = {
    "       ", "  # #  ", "       ", "  # #  ", "       "
};

void print_large_clock(int h, int m, int s) {
    int h1 = h / 10;
    int h2 = h % 10;
    int m1 = m / 10;
    int m2 = m % 10;
    int s1 = s / 10;
    int s2 = s % 10;

    for (int i = 0; i < DIGIT_HEIGHT; ++i) {
    printf("%s%s %s %s %s %s %s %s%s\n",
               COLOR_CYAN,
               digits[h1][i], digits[h2][i],
               colon[i],
               digits[m1][i], digits[m2][i],
               colon[i],
               digits[s1][i], digits[s2][i],
               COLOR_RESET);
    }
}

int main() {
    printf("\x1b[?25l");
    system("clear");

    while (1) {
        time_t now = time(NULL);
        struct tm* tm_info = localtime(&now);

        int hour = tm_info->tm_hour;
        int minute = tm_info->tm_min;
        int second = tm_info->tm_sec;

        print_large_clock(hour, minute, second);

        fflush(stdout);

        sleep(1);

        printf("\x1b[%dA", DIGIT_HEIGHT);
        printf("\r");
    }

    printf("\x1b[?25h");
    return 0;
}
