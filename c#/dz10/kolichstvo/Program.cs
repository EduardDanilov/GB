
void kolichestvo(string[] array)
{
    int count = 0;
    char[] glasnie = {'e', 'y', 'u', 'i', 'o', 'a'};
    for (int i = 0; i < array.Length; i++)
    {
        for (int j = 0; j < glasnie.Length; j++)
        {
            if (array[i].ToLower()[0] == Char.ToLower(glasnie[j])) count++;
        }
    }
    Console.WriteLine(count);
}


string[] words = {"wer", "hts", "Akl", "psr", "ort", "emx", "xvn", "Yng"};
kolichestvo(words);