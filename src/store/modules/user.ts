import {defineStore} from "pinia";
import {UserState} from "@/store/interface";

export const useUserStore = defineStore({
    id: 'grace-user',
    state: (): UserState => ({
        token: '',
        userInfo: {name: "Gracer"}
    }),
    getters: {},
    actions: {
        //setToken
        setToken(token: string) {
            this.token = token
        },
        setUserInfo(userInfo: UserState['userInfo']) {
            this.userInfo = userInfo
        }
    },
})