int summaChisel(int number)
{
    string workingNumber = Convert.ToString(number);
    int sum = 0;
    for (int i = 0; i < workingNumber.Length; i++)
    {
        sum = sum + Convert.ToInt32(workingNumber[i].ToString());
    }
    return sum;
}

Console.Write("Введите число: ");
int userNumber = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Сумма чисел: " + summaChisel(userNumber));