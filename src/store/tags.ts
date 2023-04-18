import { defineStore } from "pinia";

//创建名为 tags 的pinia仓库
export default defineStore('tags',{
    state: () => {
        return {
            redirectId:'',
        }
    },
   actions:{
         //设置重定向id
        setRedirectId(id:string){
            this.redirectId = id
        }
   }
})
