int[] randomArray(int size)
{
    int[] array = new int[size];
    for (int i = 0; i < size; i++)
    {
        array[i] = new Random().Next(100, 999);
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

int kolichestvoChetnihVMassive(int[] array)
{
    int count = 0;
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] % 2 == 0)
            count = count + 1;
    }
    return count;
}


Console.Write("input size: ");
int arraySize = Convert.ToInt32(Console.ReadLine());

int[] myArray = randomArray(arraySize);

printArray(myArray);

Console.WriteLine("Количество четных чисел в массиве: " + kolichestvoChetnihVMassive(myArray));