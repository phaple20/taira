<template>
    <section class="course_list">
        <div class="md-example-child md-example-child-scroll-view md-example-child-scroll-view-0">
            <md-scroll-view ref="scrollView" :scrolling-x="false" :bouncing="true" :autoReflow="true"
                @scroll="$_onScroll">
                <ol>
                    <li v-for="(item,index) in CourseData" :key="index">
                        <md-field>
                            <md-cell-item :title="item.title" :brief="item.subContent"></md-cell-item>
                            
                        </md-field>
                    </li>
                </ol>
            </md-scroll-view>
        </div>
    </section>
</template>
<script>
    import { ScrollView,Field,CellItem } from 'mand-mobile'
    export default {
        name: 'courselist',
        computed: {
            CourseData: {
                get() {
                    return this.$store.state.CourseData
                },
                set() {

                }
            }
        },
        components: {
            [Field.name]: Field,
            [CellItem.name]: CellItem,
            [ScrollView.name]: ScrollView,
        },
        beforeCreate() {

        },
        created() {
            const CollegeListInfo = {
                //urlType: this.PUBLIC_METHODS.getUrl("type"),
                pno: 1,
                pageSize: 20,
                type: 'initialize',
            };
            this.$store.dispatch('CourseData/CourseDataGet', CollegeListInfo)
        },
        data() {
            return {
                
            }
        },
        beforeMount() {

        },
        mounted() {
            window.ScrollViewTrigger0 = () => {
                this.addItems()
            }
        },
        methods: {
            $_onScroll({ scrollLeft, scrollTop }) {
                //   console.log(`[Mand Mobile ScrollView - demo0 - onScroll] scrollLeft: ${scrollLeft}, scrollTop: ${scrollTop}`)
            }
        },
    }
</script>
<style lang="scss">
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
    }

    .course_list {
        height: 100%;
    }

    .md-example-child-scroll-view-0 {
        height: 100%;
        background: #FFF;
    }

    .scroll-view-item {
        padding: 20px 0;
        text-align: center;
        font-size: 14px;
        font-family: DINAlternate-Bold;
        border-bottom: .5px solid #efefef;
    }
</style>