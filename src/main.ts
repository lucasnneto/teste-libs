import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import Component1 from "./components/Component1.vue"
import pine from "pine-btree";
createApp(App).use(pine, {}).mount('#app')
