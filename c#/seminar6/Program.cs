/*string preobrazovanie(int number)
{
    string result = string.Empty;
    while (number >= 1)
    {
        result = number%2 + result;
        number /=2; //number = number / 2
    }
    return result;
}
Console.WriteLine(preobrazovanie(10));
*/

//Напишите программу, которая перевернёт одномерный массив (последний элемент будет на первом месте, а первый - на последнем и т.д.) 
/*
int[] createRandomArray(int size, int min, int max)
{
    int[] array = new int[size];
    for(int i = 0; i < size; i++)
        array[i] = new Random().Next(min, max + 1);
    return array;
}

void ShowArray(int[] array) 
{ 
for (int i = 0; i < array.Length; i++) 
{ 
Console.Write(array[i] + " "); 
} 
Console.WriteLine(); 
} 

int[] perevernu(int[] array)
{
    for (int i = 0, j = array.Length -1; i < j; i++, j--)
    {
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

int[] myArray = createRandomArray(6, 1, 9);
ShowArray(myArray);
ShowArray(perevernu(myArray));
*/


//Напишите программу, которая принимает на вход три числа и проверяет, может ли существовать треугольник с сторонами такой длины. 
//a<b+c
/*
bool treugolnik(int arg1, int arg2, int arg3)
{
    if (arg1<arg2+arg3 && arg2<arg1+arg3 && arg3<arg2+arg1) return true;
    return false;
}

Console.Write("Введите число 1: ");
int a = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите число 2: ");
int b = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите число 3: ");
int c = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(treugolnik(a,b,c));
*/
//Не используя рекурсию, выведите первые N чисел Фибоначчи. Первые два числа Фибоначчи: 0 и 1. 

void ShowArray(int[] array) 
{ 
for (int i = 0; i < array.Length; i++) 
{ 
Console.Write(array[i] + " "); 
} 
Console.WriteLine(); 
}

int[] fibonachi(int N, int a, int b)
{
    int[] fibo = new int[N];
    fibo[0] = a;
    fibo[1] = b;
    for (int i = 2; i < N; i++)
    {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
int[] myArray = fibonachi(9, 0, 1);
ShowArray(myArray);