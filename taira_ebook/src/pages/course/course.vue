<template>
    <div>
        {{ CourseData }}
    </div>
</div>
</template>
<script>

export default {
    name: 'course',
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
        this.$store.dispatch('CourseData/CourseDataGet',CollegeListInfo)
    },
    data() {
        return {
            
        }
    },
    beforeMount() {

    },
    mounted() {
        
    },
    methods: {
       
    },
}
</script>