package com.taira.family.study;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class GenericsDemo<Z> {
    private Z key;
    static Logger logger = LoggerFactory.getLogger(GenericsDemo.class);

    public GenericsDemo(Z key) {
        this.key = key;
    }

    public Z getKey() {
        return key;
    }

    public static void showKeyValue(GenericsDemo<?> obj) {
        logger.info("obj:" + obj.getKey());
    }

    public static void main(String[] args) {
        GenericsDemo<Integer> g1 = new GenericsDemo<Integer>(415645);
        GenericsDemo<String> g2 = new GenericsDemo<String>("Generics");
        GenericsDemo g3 = new GenericsDemo(true);
        logger.info("g1:"+ g1.getKey());
        logger.info("g2:"+ g2.getKey());
        logger.info("g3:"+ g3.getKey());
        showKeyValue(g3);
    }

}
