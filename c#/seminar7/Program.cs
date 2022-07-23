/*
string[,] test = new string[2, 5];

test[1, 2] = "slovo";
for(int i = 0; i < test.GetLength(0); i++)
{
    for(int j = 0; j < test.GetLength(1); j++)
    {
        Console.Write($"{test[i, j]}" + "+ ");
    }
Console.WriteLine();
}
*/

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

void fillArray(int[,] array)
{
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
            array[i, j] = new Random().Next(1, 10);
        }
    }
    Console.WriteLine();
}

int[,] matrix = new int[5, 5];
printArray(matrix);
Console.WriteLine();
fillArray(matrix);
printArray(matrix);

