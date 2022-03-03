#include <stdio.h>
#include <conio.h>
#include <process.h>
#include <stdlib.h>
int main()
{
FILE *fs,*ft;{}
char ch;

//open file 1
fs = fopen("sample.c","rb");
if(fs==NULL)
    {
      puts("Source file cannot be opened.");
      exit(0); 
    }

//open file 2
ft = fopen("sample1.c","wb");
if (ft==NULL)
  {
    puts("Target file cannot be opened.");  //if not found 
    fclose(fs);
    exit(0);
  }
else printf("COPIED SUCCESFULL"); // elese copied succesfully


  while(1)
 {
   ch=fgetc(fs);
     if (ch==EOF) break;
     else fputc(ch,ft);
 }

fclose(fs);  //clossing of both files
fclose(ft);


return 0;
// yash
}