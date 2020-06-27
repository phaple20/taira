<template>
    <div class="ebook-reader">
        <!--{{$route.params.fileName}}-->
        <div id="read"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'
global.ePub = Epub
export default {
    computed: {
        ...mapGetters(['fileName','menuVisible'])
    },
    methods: {
        prevPage() {
            if(this.rendition) {
                this.rendition.prev()
            }
        },
        nextPage() {
            if(this.rendition) {
                this.rendition.next()
            }
        },
        toggleTitleAndMenu() {
             this.$store.dispatch('setMenuVisible',!this.menuVisible)
        },
        initEpub() {
            const url = 'http://localhost:1000/' + this.fileName + '.epub'
            //'/yourouchi.epub'
            this.book = new Epub(url)
            console.log(this.book);
            this.rendition = this.book.renderTo('read',{
                width: innerWidth,
                height: innerHeight,
                method: 'default'
            })
            this.rendition.display()
            this.rendition.on('touchstart', event => {
                this.touchStartX = event.changedTouches[0].clientX
                this.touchStartTime = event.timeStamp
            })
            this.rendition.on('touchend', event => {
                const offsetX = event.changedTouches[0].clientX - this.touchStartX
                const time = event.timeStamp - this.touchStartTime
                if(time < 500 && offsetX > 40) {
                    this.prevPage()
                }else if (time < 500 && offsetX < -40) {
                    this.nextPage()
                } else {
                    this.toggleTitleAndMenu()
                }
                event.preventDefault()
                event.stopPropagation()
            })
        }
    },
    mounted() {
        //http://192.168.101.6:1000/epub/yourouchi.epub
        this.$store.dispatch('setFileName',this.$route.params.fileName.split('|').join('/')).then(() => {
            this.initEpub()
        });
    }
}
</script>