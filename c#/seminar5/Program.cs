int[] createRandomArray(int size, int min, int max)
{
    int[] array = new int[size];
    for(int i = 0; i < size; i++)
        array[i] = new Random().Next(min, max + 1);
    return array;
}

void showArray(int[] array)
{
    for (int i = 0; i < array.Length; i++)
        Console.Write(array[i] + " ");
    Console.WriteLine();
}
/*
int findPositiveSum(int[] array)
{
    int sum = 0;
    for (int i = 0; i < array.Length; i++)
        if (array[i] > 0) sum += array[i];
    return sum;
}
*/
/*int[] myArray = createRandomArray(10, -9, 9);
showArray(myArray);
Console.WriteLine("summa: " + findPositiveSum(myArray));
*/
//Задайте массив. Напишите программу, которая определяет, присутствует ли заданное число в массиве. 
/*
int[] myArray = createRandomArray(50, -50, 50);

void metodNaSovpadenie (int[] array)
{
    Console.Write("Введите число: ");
    int num = Convert.ToInt32(Console.ReadLine());
    for(int i = 0; i < array.Length; i++)
    {
        if (num == array[i])
        {
        Console.WriteLine("Введенное число " + num + " есть в массиве");
        }
    }
}
metodNaSovpadenie(myArray);
*/

//Напишите программу замена элементов массива: положительные элементы замените на соответствующие отрицательные, и наоборот.
/*int[] myArray = createRandomArray(50, -50, 50);
showArray(myArray);
void zamena (int[] array)
{
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] > 0)
        {
            array[i] = array[i] * -1;
        }
        else if (array[i] < 0)
        {
            array[i] = array[i] * -1;
        }
    Console.Write(array[i] + " ");
    }
}
zamena(myArray);
*/

//Задайте массив из 20 случайных чисел. Найдите количество элементов массива, значения которых лежат в отрезке [10,99]. 
int[] myArray = createRandomArray(20, 1, 500);


