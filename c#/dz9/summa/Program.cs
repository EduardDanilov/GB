int SumOfNumbers(int min, int max)
{
    int sum = 0;
    for (int i = min; i <= max; i++) sum = sum + i;
    return sum;
}


Console.Write("Введите минимальное значение: ");
int n = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите максимальное значение: ");
int m = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(SumOfNumbers(n, m));