/* программа возводящая число 2 в 10 степень с использованием цикла while

x * x 10 раз
*/

//var num=2, exp=10, res=1, cnt=1;
putstr("Enter number:  ");
var num=readline();
putstr("Enter exponent:  ");
var exp=readline();
var res=1, cnt=1;

while( cnt <= exp ){
    res *= num;
    cnt++;
}
//console.log (res);
print (res);
