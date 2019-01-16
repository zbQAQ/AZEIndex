<template>
    <div class="container">
        <div class="row">
           <div class="col-md-4">
               <div>
                   <button v-if="show" type="button" class="btn btn-default" @click="show()">政府</button>
                   <!-- <span v-else class="btn btn-default zhengfu">政府</span> -->
               </div>
               
           </div>
        
            <div class="col-md-4">
                <div>
                    <button type="button" class="btn btn-default" @click="hide()">企业</button>
                </div>
            </div>
            <div class="col-md-4">
                <div>
                    <button type="button" class="btn btn-default">公众</button>
                </div>
            </div>
        </div>
        <div class="row app">
          <div class="col-md-4">
            <div>
                <a href="#">
                    <img src=".././assets/image/resolve-app.jpg" alt="app">
                </a>
            </div>
         </div>
         <div class="col-md-4">
            <div>
                <a href="#">
                    <img src=".././assets/image/resolve-wx.jpg" alt="app">
                </a>
            </div>
         </div>
        </div>

    </div>
</template>
<script>
export default {
    name:'resolve',
    data(){
        return{
            msg:'hello resolve'
        }
    },
    methods:{
         show(){
            //  alert(1);
             show:true
         },
         hide(){

         }
    }
}
</script>
<style scoped>
   .container{
       margin-top: 16px;
   }
   .container .row button{
       width: 390px;
       height: 60px;
       color: #787878;
       font-size: 26px;
       background-color: #f8f8f8;
   }
   .app{
       margin-top:16px;
   }
   .zhengfu{
       
   }
   .col-md-3{
       margin: 10px;
   }
</style>
