import base from './http_base'
import {get} from './http_config'

export default {
    GetCourseData(p) {
        return get(`${base.zjtApi}/api/v2/transcript/queryAppTranscriptVideo`, p);
    }
}