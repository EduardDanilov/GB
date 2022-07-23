void randomArray (double[,] array)
{

    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
        array[i, j] = new Random().Next(-50, 50);
        Console.Write($"{Math.Round(array[i, j], 1)} ");
        }
    Console.WriteLine();
    }
}
Console.Write("Input number of rows: ");
int rows = Convert.ToInt32(Console.ReadLine());
Console.Write("Input number of columns: ");
int columns = Convert.ToInt32(Console.ReadLine());
double[,] test = new double[rows, columns];
randomArray(test);