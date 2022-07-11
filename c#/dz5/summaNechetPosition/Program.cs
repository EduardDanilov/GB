int[] randomArray(int size)
{
    int[] array = new int[size];
    for (int i = 0; i < size; i++)
    {
        array[i] = new Random().Next(-1000, 1000);
    }
    return array;
}

void printArray(int[] array)
{
    for (int i = 0; i < array.Length; i++)
    {
        Console.Write(array[i] + " ");
    }
    Console.WriteLine();
}

int summaNechetnihIndeksov(int[] array)
{
    int sum = 0;
    for (int i = 1; i < array.Length; i+=2)
    {
        sum = sum + array[i];
    }
    return sum;
}

Console.WriteLine("В предложенном массиве установлен интервал чисел от -1000 до 1000");
Console.WriteLine("Суммируются элементы, стоящие на нечетных позициях (индексы 1, 3, 5 и так далее)");

Console.Write("Введите количество элементов массива: ");
int userCount = Convert.ToInt32(Console.ReadLine());

int[] myArray = randomArray(userCount);

printArray(myArray);

Console.WriteLine("Сумма указанных элементов в массиве: " + summaNechetnihIndeksov(myArray));
