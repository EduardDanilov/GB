

void createRandomArray(int[,] array)
{
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
        array[i, j] = new Random().Next(1, 50);
        Console.Write(array[i, j] + " ");
        }
    Console.WriteLine();
    }
}

void printArray(int[,] array)
{
    for(int i = 0; i < array.GetLength(0); i++)
    {
        for(int j = 0; j < array.GetLength(1); j++)
        {
            Console.Write($"{array[i, j]} ");
        }
    Console.WriteLine();
    }
}

void minStroka(int[,] array)
{
    int minSum = int.MaxValue;
    int index = 0;
    for(int i = 0; i < array.GetLength(0); i++)
    {
        int sum = 0;
        for(int j = 0; j < array.GetLength(1); j++)
        {
            sum = sum+array[i,j];
        }
        if(sum < minSum)
        {
            minSum = sum;
            index = i;
        }
        Console.WriteLine("сумма " + (i+1) + "-й строки равна " + sum);
        sum = 0;
    }
    Console.WriteLine("Минимальная сумма " + minSum + " на строке № " + (index+1));
}

int[,] my = new int[3,3];
createRandomArray(my);
minStroka(my);