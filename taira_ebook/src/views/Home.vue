<template>
  <div class="home">
    <span id="icon1" class="icon-mobile"></span>
    <span id="icon2" class="icon-good"></span>
    <span id="icon3" class="icon-close"></span>
    <button @click="changeNum">{{name}}次数：{{num}}</button>
    <div id="read"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Epub from 'epubjs'
import '../study/syntax'

// 2s 之后返回双倍的值
function doubleAfter2seconds(num) {
  //成功用resolve，失败用reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log(num);
            resolve(2 * num)
        }, 2000);
    } )
}
async function testResult() {
    let first = await doubleAfter2seconds(3);
    let second = await doubleAfter2seconds(5);
    let third = await doubleAfter2seconds(4);
    console.log(first + second + third);
}

testResult();

export default {
    name: 'Home',
    computed: {
        num() {
            return this.$store.state.book.num
        }
    },
    data() {
        return {
            name: this.$store.state.book.name
            // num: this.$store.state.num
        }
    },
    mounted () {
        console.log(this.$store.state.book.name)
        this.book = new Epub('/shzdtzx.epub')
        this.book.renderTo('read', {
            width: window.innerWidth / 1.5,
            height: window.innerHeight / 1.5
        }).display()
    },
    methods: {
        changeNum() {
            this.$store.commit('change', 1)
        }
    }
}
</script>

<style lang="scss" scoped>
  @mixin iconcolor($rgb1: random(255),$rgb2: random(255),$rgb3: random(255)) {
    background-color: rgb($rgb1,$rgb2,$rgb3);
  }
  @function iconchange() {
    $bg: rgb( random(255), random(255), random(255));
    @return $bg;
  }
  #icon1 {
    @include iconcolor()
  }
  #icon2 {
    @include iconcolor()
  }
  #icon3 {
    background-color: iconchange();
  }
</style>
