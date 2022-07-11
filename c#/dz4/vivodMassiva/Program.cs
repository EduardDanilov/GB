int[] randomArray(int size, int min, int max)
{
    int[] array = new int[size];
    for (int i = 0; i < size; i++)
    {
        array[i] = new Random().Next(min, max);
    }
    return array;
}


void printArray(int[] array)
{
    for (int i = 0; i < array.Length; i++)
    {
        Console.Write(array[i] + " ");
    }
}


Console.Write("input count: ");
int count = Convert.ToInt32(Console.ReadLine());
Console.Write("input min: ");
int min = Convert.ToInt32(Console.ReadLine());
Console.Write("input max: ");
int max = Convert.ToInt32(Console.ReadLine());
int[] myArray = randomArray(count, min, max);
printArray(myArray);