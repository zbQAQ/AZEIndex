<template>
   <div>
    <div class="container">
        <div class="row">
           <div class="col-md-4">
               <div>
                   <button v-if="show" type="button" class="btn btn-default" data-toggle="tooltip" data-pl                    acement="left" title="深圳市人民政府" @click="show()">政府</button>
                   <!-- <span v-else class="btn btn-default zhengfu">政府</span> -->
               </div>
               
           </div>
        
            <div class="col-md-4">
                <div>
                    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="le                    ft" title="某某企业" @click="hide()">企业</button>
                </div>
            </div>
            <div class="col-md-4">
                <div >
                    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="le                    ft" title="">公众</button>
                </div>
            </div>
        </div>
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
	<div class="container2">
		<div class="row">
			<div class="col-md-4" id="news">
				<div class="title">新闻</div>
				
			</div>
			<div class="col-md-4">
				
			</div>
			<div class="col-md-4">
				
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
	/* *{
		text-decoration: none;
	} */
   .container{
       margin-top: 16px;
	   border: 1px #ccc solid;
	   padding-bottom: 20px;
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
   .col-md-3{
       margin: 10px;
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
	   height: 600px;
	   display: inline-block;
	   padding: 0 400px;;
   }
   .row{
	   text-align:center;
	   
   }
   .container2 .row .col-md-4{
	   padding: 20px;
   }
   .title{
	   font-size: 18px;
    color: #333;
    float: left;
    position: relative;
    padding-left: 11px;
	border-left: #20ACE6 solid 4px;
	font-weight: bold;
   }
</style>
