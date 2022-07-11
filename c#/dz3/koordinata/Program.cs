double rasstoyanie (double x1, double x2, double y1, double y2, 
                    double z1, double z2)
{
    double distance = Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2) + Math.Pow(z2 - z1, 2));
    Console.WriteLine("Расстояние между двумя точками: " + Math.Round(distance, 2));
    return distance;
}

Console.Write("Введите координату X для точки 1: ");
int pointAX = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите координату X для точки 2: ");
int pointBX = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите координату Y для точки 1: ");
int pointAY = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите координату Y для точки 2: ");
int pointBY = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите координату Z для точки 1: ");
int pointAZ = Convert.ToInt32(Console.ReadLine());
Console.Write("Введите координату Z для точки 2: ");
int pointBZ = Convert.ToInt32(Console.ReadLine());

rasstoyanie(pointAX, pointBX, pointAY, pointBY, pointAZ, pointBZ);