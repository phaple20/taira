import $store from '../index'

export default {

    CourseData_get :function(res, type, pno) {
        if (type === 'initialize') {
            $store.state.CourseData = res.data.content;
            //$store.state.IndexColumnList.firstUpdateTime = res.data.content[0].time;
        } 
    }

}