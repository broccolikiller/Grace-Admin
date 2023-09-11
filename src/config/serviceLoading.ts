/**
 * 全局请求loading
 */
import {ElLoading} from "element-plus";

let loadingInstance : ReturnType<typeof ElLoading.service>

/**
 * @description开启loading
 */

const startLoading = () => {
    loadingInstance = ElLoading.service({
        fullscreen: true,
        lock: true,
        text: 'Loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}

/**
 * @description结束loading
 */
const endLoading = () => {
    loadingInstance.close()
}


/**
 * @description显示全屏加载
 */

let needLoadingRequestCount = 0

export const showFullScreenLoading = () => {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

/**
 * @description隐藏全屏加载
 */

export const tryHideFullScreenLoading = () => {
    if (needLoadingRequestCount <= 0) {
        return
    }
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}
