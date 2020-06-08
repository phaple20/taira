<template>
  <div class="home">
    <span class="icon-mobile"></span>
    <span class="icon-good"></span>
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
      width: window.innerWidth,
      height: window.innerHeight
    }).display()
  }
}
</script>
