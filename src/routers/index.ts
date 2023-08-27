import {createRouter, createWebHashHistory} from "vue-router";
import {errorRouter, staticRouter} from "@/routers/modules/staticRouter.ts";
import {HOME_URL} from "@/config";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [...staticRouter,...errorRouter],
    strict: false,
    scrollBehavior: () => ({left: 0, top: 0})
})
// router.beforeEach(async (to, from, next) => {
//     console.log('to',to)
//     console.log('from',from)
//     console.log('next',next)
//   return   next()
// })

export default router