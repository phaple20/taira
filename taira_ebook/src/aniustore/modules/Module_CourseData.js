import Vue from 'vue'
/* 全局参数 */
import PUBLIC_KEY from '../../assets/js/Public-Key'
/* 时间格式化处理 */
import moment from 'moment'
Vue.prototype.moment = moment;

import $MD5 from 'md5'

import Api_CourseData from '../../api/Api_CourseData'

const state = {
  CourseData: 'course12'
}

const mutations = {

}

const actions = {
  async CourseDataGet({commit},CollegeListInfo) {
    const tNum = 5,
          vNum = 3,
          pno = CollegeListInfo.pno,
          psize = CollegeListInfo.pageSize,
          type = CollegeListInfo.type,
          api_getCollegeList = '/api/v2/transcript/queryAppTranscriptVideo?'
                + "aniuuid=" + PUBLIC_KEY.userInfo.data.aniuUid
                + "&channelid=" + PUBLIC_KEY.channelId
                + "&clienttype=" + PUBLIC_KEY.clientType
                + "&devid=" + PUBLIC_KEY.devId
                + "&forapp=" + PUBLIC_KEY.forapp
                + "&pno=" + pno
                + "&psize=" + psize
                + "&tNum=" + tNum
                + "&time=" + moment().utcOffset(480).format('YYYYMMDDHHmmss')
                + "&vNum=" + vNum
                + "&version=" + PUBLIC_KEY.version
                + PUBLIC_KEY.signKey,
            MD5_api_getCollegeList = $MD5(api_getCollegeList),
                  
              data = {
                aniuuid: PUBLIC_KEY.userInfo.data.aniuUid,
                channelid: PUBLIC_KEY.channelId,
                clienttype: PUBLIC_KEY.clientType,
                devid: PUBLIC_KEY.devId,
                forapp: PUBLIC_KEY.forapp,
                pno: pno,
                psize: psize,
                tNum: tNum,
                time: moment().utcOffset(480).format('YYYYMMDDHHmmss'),
                vNum: vNum,
                version: PUBLIC_KEY.version,
                sign: MD5_api_getCollegeList
            };
            console.log(api_getCollegeList)
            console.log(data)
    Api_CourseData.GetCourseData(data)
    .then((res) => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

    state.CourseData = 'changedCourseData'
  }
}

const getters = {

}


export default {
  namespaced: true,
    actions,
    mutations,
    state,
    getters,
}

