function reverse (array) {

    var ini=0;
    var fin=array.length-1;
    var item;
    
        while (ini<fin) {
            item=array[fin];
            array[fin]=array[ini];
            array[ini]=item;

            ini++;
            fin--;
        }
}