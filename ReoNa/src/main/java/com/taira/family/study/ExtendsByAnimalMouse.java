package com.taira.family.study;

public class ExtendsByAnimalMouse extends ExtendsAnimal {

    public ExtendsByAnimalMouse(String myName, int myId) {
        super(myName, myId);
    }

    void MousePlay() {
        super.introduce();
    }

    public static void main(String[] args) {
        ExtendsByAnimalMouse eba = new ExtendsByAnimalMouse("mouse", 12);
        eba.eat();
        eba.MousePlay();
    }

}
