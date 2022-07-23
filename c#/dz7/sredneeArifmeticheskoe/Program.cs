void randomArray (int[,] array)
{

    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
        array[i, j] = new Random().Next(1, 100);
        Console.Write($"{array[i, j]} ");
        }
    Console.WriteLine();
    }
}

int sredneeArifm(int[,] array)
{
    Console.Write("Введите номер столбца: ");
    int stolbec = Convert.ToInt32(Console.ReadLine());
    int summa = 0;

    for (int stroka = 0; stroka < array.GetLength(0); stroka++)
    {
        summa = summa + array[stroka, stolbec];
    }
    int srednee = summa / array.GetLength(0);
    Console.WriteLine(srednee);
    return srednee;
}

int[,] myArray = new int[5,5];
randomArray(myArray);
sredneeArifm(myArray);
