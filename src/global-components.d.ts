import Component1 from './components/Component1.vue'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        Component1: typeof Component1,
    }
}