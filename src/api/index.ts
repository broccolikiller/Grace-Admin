import {InternalAxiosRequestConfig} from "axios";
import {ResultEnum} from "@/enums/httpEnums.ts";


// 是否有loading效果
export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    noLoading?: boolean
}

const config = {
    // 默认请求地址，可在.env.**文件里修改
    baseURL: import.meta.env.VITE_API_URL as string,
    // 设置超时时间
    timeout: ResultEnum.TIMEOUT as number,
    // 跨域时允许携带凭证
    withCredentials: true
}

class RequestHttp {


    
}