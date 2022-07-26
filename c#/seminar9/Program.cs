/*
void showNumbers(int n)
{
    if(n > 1) showNumbers(n - 1);

    Console.Write(n + " ");
}
*/
//showNumbers(5);


int sumOfDigits(int n)
{
    if(n >= 10)
    {
        return n % 10 + sumOfDigits(n/10);
    }
    else return n;
}

Console.WriteLine(sumOfDigits(9));
