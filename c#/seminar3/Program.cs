/*
int findQuart(int arg1, int arg2)
{
    if (arg1 > 0 && arg2 > 0) return 1;
    if (arg1 < 0 && arg2 > 0) return 2;
    if (arg1 < 0 && arg2 < 0) return 3;
    if (arg1 > 0 && arg2 < 0) return 4;
    return -1;
}

Console.Write("Input X: ");
int x = Convert.ToInt32(Console.ReadLine());
Console.Write("Input Y: ");
int y = Convert.ToInt32(Console.ReadLine());
int quart = findQuart(x,y);
if (quart == -1)
{
    Console.WriteLine("Point on the axes");
}
else 
{
    Console.WriteLine("Number of quart is " + findQuart(x,y));
}
*/


//Напишите программу, которая по заданному номеру четверти, показывает диапазон возможных координат точек в этой четверти (x и y). 
/*
void chetvert(int x)
{
    if (x == 1) Console.WriteLine("Первая четверть. Координаты X и Y - положительные числа");
    if (x == 2) Console.WriteLine("Вторая четверть. Координата X - отрицательное число, координата Y - положительное");
    if (x == 3) Console.WriteLine("Третья четверть. Координаты X и Y - отрицательные числа");
    if (x == 4) Console.WriteLine("Четвертая четверть. Координата X - положительные числа, Координата Y - отрицательные");
    if (x > 4 || x < 1) Console.WriteLine("Такой четверти не существует!");
}
Console.Write("Введите номер четверти: ");
int chetvertNumber = Convert.ToInt32(Console.ReadLine());
chetvert(chetvertNumber);
*/

//Напишите программу, которая принимает на вход число (N) и выдаёт квадраты чисел от 1 до N. 
/*
void kvadrat(int x)
{
    for (int i=1; i<=x; i++)
    {
        Console.Write(i*i + " ");
    }
}
Console.Write("Введите число: ");
int n = Convert.ToInt32(Console.ReadLine());
kvadrat(n);
*/

