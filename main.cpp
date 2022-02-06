#include <stdio.h> 

int main(void) {
  int userInput = 0;
  
  scanf("This is the test commit, make a branch, make changes and then add to this file\n how big do you want the box?", userInput);
  char out[userInput];
  for (int i = 0; i < userInput; i++) { out[i] = '#'; }
  
  for (int i = 0; i < userInput; i++) { printf("%s\n", out); }
  return 0;
}
