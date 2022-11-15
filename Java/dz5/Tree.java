class Tree {
  public Tree left;            // левое и правое поддеревья и ключ
  public Tree right;
  public int key;

  public Tree(int k) {        // конструктор с инициализацией ключа
     key = k;
  }

/*  insert (добавление нового поддерева (ключа))
   сравнить ключ добавляемого поддерева (К) с ключом корневого узла (X).
   Если K>=X, рекурсивно добавить новое дерево в правое поддерево.
   Если K<X, рекурсивно добавить новое дерево в левое поддерево.
   Если поддерева нет, то вставить на это место новое дерево
*/
  public void insert( Tree aTree) {
    if ( aTree.key < key )
       if ( left != null ) left.insert( aTree );
       else left = aTree;
    else
       if ( right != null ) right.insert( aTree );
       else right = aTree;
  }

/*  traverse (обход)
   Рекурсивно обойти левое поддерево.
   Применить функцию f (печать) к корневому узлу.
   Рекурсивно обойти правое поддерево.
*/
  public void traverse(TreeVisitor visitor) {
     if ( left != null) 
           left.traverse( visitor );

     visitor.visit(this);

     if ( right != null ) 
           right.traverse( visitor );
  }
}

interface TreeVisitor {
 public void visit(Tree node);
};

class KeyPrinter  implements TreeVisitor {
 public void visit(Tree node) {
     System.out.println( " " + node.key );
 }
};

public class TreeSort {
  public static void main(String args[]) {
    Tree myTree;
    myTree = new Tree( 7 );       // создать дерево (с ключом)
    myTree.insert( new Tree( 5 ) );  // присоединять поддеревья
    myTree.insert( new Tree( 9 ) );
    myTree.traverse(new KeyPrinter());
 }
}