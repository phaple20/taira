<template>
  <div class="home">
    <span id="icon1" class="icon-mobile"></span>
    <span id="icon2" class="icon-good"></span>
    <span id="icon3" class="icon-close"></span>
    <div id="read"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Epub from 'epubjs'

export default {
    name: 'Home',
    mounted () {
        this.book = new Epub('/shzdtzx.epub')
        this.book.renderTo('read', {
            width: window.innerWidth / 1.5,
            height: window.innerHeight / 1.5
        }).display()
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
