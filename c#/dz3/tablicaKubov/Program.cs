void tablicaKubov(int number)
{
    for (int i = 1; i <= number; i++)
    {
        int kub = i * i * i;
        Console.Write(kub + " ");
    }
}
Console.Write("Введите число: ");
int userNumber = Convert.ToInt32(Console.ReadLine());
tablicaKubov(userNumber);
Console.WriteLine();