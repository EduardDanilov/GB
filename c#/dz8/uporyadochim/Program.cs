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

void uporyadochim(int[,] array)
{
    int temp;
    for(int i = 0; i < array.GetLength(0); i++)
    {
        for(int j = 0; j < array.GetLength(1); j++)
        {
            for(int a = j+1; a < array.GetLength(0); a++)
            {
                if(array[i,a] < array[i,j])
                {
                    temp = array[i,j];
                    array[i,j] = array[i,a];
                    array[i,a] = temp;
                }
            }
        }
    }
}

int[,] my = new int[5,5];
createRandomArray(my);
uporyadochim(my);
Console.WriteLine();
printArray(my);
