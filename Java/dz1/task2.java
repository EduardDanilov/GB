// Реализовать алгоритм пирамидальной сортировки (HeapSort)

public class task2 {

	public static void sort(int[] a) {
		buildHeap(a);
		while (heapSize > 1) {
			swap(a, 0, heapSize - 1);
			heapSize--;
			heapify(a, 0);
		}
	}
	
	/**
	 * Построение кучи. Поскольку элементы с номерами начиная с a.length / 2 + 1
	 * это листья, то нужно переупорядочить поддеревья с корнями в индексах
	 * от 0 до a.length / 2 (метод heapify вызывать в порядке убывания индексов)
	 * 
	 * @param a - массив, из которого формируется куча
	 */
	private static void buildHeap(int[] a) {
		heapSize = a.length;
		for (int i = a.length / 2; i >= 0; i--) {
			heapify(a, i);
		}
	}
	
	/**
	 * Переупорядочивает поддерево кучи начиная с узла i так, чтобы выполнялось 
	 * основное свойство кучи - a[parent] >= a[child].
	 * 
	 * @param a - массив, из которого сформирована куча
	 * @param i - корень поддерева, для которого происходит переупорядочивание
	 */
	private static void heapify(int[] a, int i) {
		int l = left(i);
		int r = right(i);
		int largest = i;
		if (l < heapSize && a[i] < a[l]) {
			largest = l;
		} 
		if (r < heapSize && a[largest] < a[r]) {
			largest = r;
		}
		if (i != largest) {
			swap(a, i, largest);
			heapify(a, largest);
		}
	}
	
	/**
	 * Возвращает индекс правого потомка текущего узла
	 * 
	 * @param i индекс текущего узла кучи
	 * @return индекс правого потомка
	 */
	private static int right(int i) {
		return 2 * i + 2;
	}
	
	/**
	 * Возвращает индекс левого потомка текущего узла
	 * 
	 * @param i индекс текущего узла кучи
	 * @return индекс левого потомка
	 */
	private static int left(int i) {
		return 2 * i + 1;
	}
	
	/**
	 * Меняет местами два элемента в массиве
	 * 
	 *
	 * @param a массив
	 * @param i индекс первого элемента
	 * @param j индекс второго элемента
	 */
	private static void swap(int[] a, int i, int j) {
		int temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
	
}