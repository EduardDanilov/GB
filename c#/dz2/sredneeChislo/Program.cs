char vivedemSredneeChislo(int arg)
{
    string sredneeChislo = Convert.ToString(arg);
    char itog = sredneeChislo[1];
    return itog;
}
int newCifra = new Random().Next(100,999);
Console.WriteLine("Заданное число: " + newCifra);
Console.WriteLine("Полученное значение: " + vivedemSredneeChislo(newCifra));