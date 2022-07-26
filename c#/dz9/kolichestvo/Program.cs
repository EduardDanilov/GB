
int kolichestvo(int n)
{
    int count = 1;
    if (n < 10) return 1;
    else count = count + kolichestvo(n/10);
    return count;
}

Console.Write("Введите число: ");
int n = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(kolichestvo(n));
