import java.util.Arrays;

public class task2 {
    public static void main(String[] args) {
        
        int[] array = {10, 2, 3, 1, 2, 2, 5};

        for (int i = 0; i < array.length; i++) {
            // Вытаскиваем значение элемента
            int value = array[i];
            // Перемещаемся по элементам, которые перед вытащенным элементом
            int j = i - 1;
            for (; j >= 0; j--) {
                // Если вытащили значение меньшее — передвигаем больший элемент дальше
                if (value < array[j]) {
                    array[j + 1] = array[j];
                } else {
                    // Если вытащенный элемент больше — останавливаемся
                    break;
                }
            }
            // В освободившееся место вставляем вытащенное значение
            array[j + 1] = value;
        }
        System.out.println(Arrays.toString(array));
            }
}