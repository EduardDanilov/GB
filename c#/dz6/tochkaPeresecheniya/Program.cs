double[] IntersectionPoint(double a1, double a2, double c1, double c2)
{
    while (a1 == a2)
    {
        Console.Write("При равных значениях k1 и k2 прямые будут параллельными. Введите новое значение k1: ");
        a1 = Convert.ToDouble(Console.ReadLine());
    }

    double x = (c2 - c1) / (a1 - a2);
    double y = a2 * x + c2;

    double[] array = new double[] { x, y };

    return array;
}

void ShowPoint(double[] array)
{
    for (int i = 0; i < array.Length; i++)
    {
        array[i] = Math.Round(array[i], 1);
        Console.Write($"{array[i]} ");
    }
    Console.WriteLine();
}

Console.Write("Введите значение k1: ");
double k1 = Convert.ToDouble(Console.ReadLine());
Console.Write("Введите значение k2: ");
double k2 = Convert.ToDouble(Console.ReadLine());
Console.Write("Введите значение b1: ");
double b1 = Convert.ToDouble(Console.ReadLine());
Console.Write("Введите значение b2: ");
double b2 = Convert.ToDouble(Console.ReadLine());

double[] point = IntersectionPoint(k1, k2, b1, b2);

Console.Write("Точка пересечения прямых имеет координаты: ");

ShowPoint(point);