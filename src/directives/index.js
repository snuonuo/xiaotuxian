// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app){
        // 懒加载指令逻辑
        app.directive('imag-lazy',{
            mounted(el, binding){
                // el:指令绑定的那个元素
                // binding:bilding.value 指令等于号后面绑定的表达式的值就是图片url
                const { stop } = useIntersectionObserver(
                   el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if(isIntersecting){
                            // 代表图片进入了视口区域
                            el.src = binding.value
                            //已经加载粗来就不用反复监听了
                            stop()
                        }
                    } 
                )
                
            }
        })
    }
}