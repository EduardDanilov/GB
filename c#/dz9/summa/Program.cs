
/*int SumOfNumbers(int min, int max)
{
    int sum = 0;
    for (int i = min; i <= max; i++) sum = sum + i;
    return sum;
}
*/

int sumnumb(int n, int m)
{
    int summa = n + m;
    if (n < m) 
    {
        summa = summa + sumnumb((n+1), (m-1));
    }
    
    return summa;
}

Console.Write("Введите минимальное значение: ");
int n = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите максимальное значение: ");
int m = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(sumnumb(n, m));