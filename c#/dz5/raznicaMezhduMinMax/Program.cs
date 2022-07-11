double[] randomArray(int size)
{
    double[] array = new double[size];
    for (int i = 0; i < size; i++)
    {
        array[i] = new Random().Next(-10000, 10000);
    }
    return array;
}

void printArray(double[] array)
{
    for (int i = 0; i < array.Length; i++)
    {
        Console.Write(array[i] + " ");
    }
    Console.WriteLine();
}

double raznicaMinMax(double[] array)
{
    double max = array[0];
    double min = array[1];
    double temp;
    double raznica;
    
    if (min > max)
    {
        temp = array[0];
        max = array[1];
        array[1] = temp;
    }

    for (int i = 2; i < array.Length; i++)
    {
        
        if (array[i] > max)
        {
            max = array[i];
        }
        else if (array[i] < min)
        {
            min = array[i];
        }
    }
    Console.WriteLine("max: " + max);
    Console.WriteLine("min: " + min);
    raznica = max - min;
    return raznica;

}

double[] myArray = randomArray(10);
printArray(myArray);
Console.WriteLine("Разница между max и min: " + raznicaMinMax(myArray));







