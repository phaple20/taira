package com.taira.family.study;

public class ExtendsAnimal {
    private String name;
    private int id;

    public ExtendsAnimal(String myName, int myId) {
        name = myName;
        id = myId;
    }

    public void eat() {
        System.out.println(name + "is eating.");
    }

    public void sleep() {
        System.out.println(name + "is sleeping.");
    }

    public void introduce() {
        System.out.println("I am No." + id + "号" + name );
    }

}
