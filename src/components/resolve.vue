<template>
   <div class="resolve">
    <div class="container">
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">公众</a></li>
            <li role="presentation"><a href="#">企业</a></li>
            <li role="presentation"><a href="#">政府</a></li>
        </ul>
        <!-- <div class="row">
           <div class="col-md-4">
               <div>
                   <button v-if="show" type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="深圳市人民政府" @click="show()">政府</button>
                   
               </div>
               
           </div>
        
            <div class="col-md-4">
                <div>
                    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="某某企业" @click="hide()">企业</button>
                </div>
            </div>
            <div class="col-md-4">
                <div >
                    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="">公众</button>
                </div>
            </div>
        </div> -->
        <div class="row app">
          <div class="col-md-4">
            <div class="img">
                <div class="hover">
                     <div class="img-box">
					    <img src=".././assets/image/resolve-app.jpg" alt="app">
					 </div>
					<span data-toggle="tooltip" data-placement="left" title="公众服务">公众服务APP</span>
                </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="img">
                <div class="hover">
                     <div class="img-box">
						 <img src=".././assets/image/resolve-wx.jpg" alt="app">
					 </div>
					<span data-toggle="tooltip" data-placement="left" title="申请投诉">申请投诉</span>
                </div>
            </div>
         </div>
       </div>
    </div>
	
    <actBox />

  </div>		
</template>
<script>
import actBox from './pageComp/actbox'
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
    },
    components: {
        actBox
    }
}
</script>
<style scoped>

    .resolve {
        margin-bottom: 50px;
    }

   .container{
       margin-top: 16px;
	   border: 1px #ccc solid;
	   padding-bottom: 20px;
       margin-bottom: 20px;
   }
   .container .nav li{
       width: 370px;
       height: 50px;
       line-height: 50px;
       
   }
    .container  .nav{
       height: 40px;
    }
   .container .row button{
       width: 390px;
       height: 60px;
       color: #787878;
       font-size: 26px;
       background-color: #f8f8f8;
	   position: relative;
	   top:0;
	   left: -15px;
   }
   .app{
       margin-top:16px;
   }
   .zhengfu{
       
   }
   .col-md-3 .img{
       /* margin: 10px; */
       position: relative;
       top: 80px;
       right: -76px;
   }
   .col-md-3 .img img{
       width: 200px;
       height: auto;
   }
   .col-md-4 .img:hover{
	   text-decoration-line: none;
   }
   .col-md-4 .hover:hover{
	   color: #0251D9;
	   cursor: pointer;
	   
   }
   .col-md-4 .img span{
	   font-size: 20px;
	   position: relative;
	   top: 0;
	   left: 8px;
	   
   }
   .col-md-4 .img .img-box{
	   margin: 10px;
   }
   .container2{
	   background-color: #f1f1f1;
	   width: 100%;
	   height: 520px;
	   display: inline-block;
	   padding: 0 324px;;
   }
   /* .row{
	   text-align:center;
	   
   } */
   .container2 .row .col-md-4{
	   padding: 20px;
   }
   .title{
	   font-size: 24px;
    color: #333;
    /* float: left; */
    position: relative;
    /* padding-left: 11px; */
	border-left: #20ACE6 solid 4px;
	font-weight: bold;
    margin: 30px 0;
    
   }
   .news a{
      padding: 20px 0;
      line-height: 40px;
      text-decoration-line: none;
      font-size: 16px;
      font-weight: 700;
      color: black;
   }
   .news a:hover{
       color: #20ACE6;
   }
   .news ul{
       width: 100%;
       list-style-type: none; 
   }
   .news ul p{
       color: #ccc;  
   }
   .contact{
        /* font-size: 24px; */
        color: #333;
        /* float: left; */
        position: relative;
        /* padding-left: 11px; */
        border-left: #20ACE6 solid 4px;
        /* font-weight: bold; */
        margin: 16px 0;
        
   }
   .contact-information ul li{
       width: 100%;
       list-style-type: none;
       line-height: 44px; 
   }
   .contact-information p{
       font-weight: 700;
   }
</style>
