<template>
  <section>
    <video-player
      class="vjs-custom-skin"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @ready="playerReadied"
      @statechanged="playerStateChanged($event)"
    >
    </video-player>
    <!--二维码-->
    <div ref="qrcode" style="margin-top: 1rem;"></div>
    <!--文本-->
    <div>{{ v_index }}</div>
    <button @click="v_add()">Add</button>
    <button @click="v_init()">清缓存</button>
    <!--imageReader-->
  </section>
</template>
<script>
import QRCode from 'qrcodejs2'
import { mapGetters } from 'vuex'
import { Icon, ImageReader, Tag, Toast } from 'mand-mobile'

export default {
  components: {
    [Icon.name]: Icon,
    [ImageReader.name]: ImageReader,
    [Tag.name]: Tag,
  },
  data() {
    return {
      imageList: {
        reader0: [
          '//img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a',
          '//manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7',
        ],
        reader1: [],
      },
      // videojs options
      playerOptions: {
        height: '360',
        autoplay: false,
        muted: true,
        language: 'en',
        aspectRatio: '16:9',
        fluid: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            // mp4
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          },
        ],
        poster:
          'https://github.githubassets.com/images/icons/emoji/unicode/1f39e.png',
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
    }
  },
  mounted() {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      console.log('dynamic change options', this.player)
      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })
      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false)
    }, 5000)

    this.$nextTick(() => {
      var canvas = this.$refs.qrcode
      new QRCode(canvas, {
        text: 'https://www.baidu.com/',
        width: 100,
        height: 100,
        colorDark: '#000', //二维码颜色
        colorLight: '#fff', //二维码背景色
      })
    })
  },
  computed: {
    //...mapGetters(['v_index']),
    player() {
      return this.$refs.videoPlayer.player
    },
    v_index() {
      return this.$store.state.mv.v_index
    },
  },
  created() {
    console.log(this.$store)
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      console.log('player play!', player)
    },
    onPlayerPause(player) {
      console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    },
    v_add() {
      this.$store.dispatch('setVIndex', this.$store.state.mv.v_index + 1)
    },
    v_init() {
      //clearVuexAlong() // localStorage 和 sessionStorage 都会被清理
      //clearVuexAlong(true,false) // 只清理 localStorage
      //clearVuexAlong(false,true) // 只清理 sessionStorage
      clearVuexAlong(true, false)
    },
  },
}
</script>
