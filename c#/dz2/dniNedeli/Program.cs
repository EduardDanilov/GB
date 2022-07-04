void dniNedeli (int arg)
{
    if (arg > 0 && arg < 6) Console.WriteLine("Рабочий");
    else if (arg == 6 || arg == 7) Console.WriteLine("Выходной");
    else Console.WriteLine("Вы ввели некорректный день недели");
}

Console.Write("Введите номер дня недели: ");
int denNedeli = Convert.ToInt32(Console.ReadLine());
dniNedeli(denNedeli);