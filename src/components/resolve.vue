<template>
   <div class="resolve">
    <div class="container">
        <!-- <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">公众</a></li>
            <li role="presentation"><a href="#">企业</a></li>
            <li role="presentation"><a href="#">政府</a></li>
        </ul> -->
        <div class="row">
           <div class="col-md-4 topNav">
               <div class="router" v-bind:class="{'pageActive':page === 'goverment'}" @click="changePage('goverment')">
                   <router-link to="goverment">
                       <div>
                         公众   
                       </div>
                   </router-link>
                   <!-- <router-link to="Goverment" v-if="show"  class="btn btn-default" data-toggle="tooltip" 
                   data-placement="left" title="深圳市人民政府" @click="show()">政府</router-link> -->
               </div>
               
           </div>
        
            <div class="col-md-4 topNav">
                <div class="router" v-bind:class="{'pageActive':page === 'enterprise'}" @click="changePage('enterprise')">
                   <router-link to="enterprise"  data-toggle="tooltip" data-placement="left" title="某某企业" @click="hide()">
                       <div>
                           企业
                       </div>
                   </router-link>
                </div>
            </div>
            <div class="col-md-4 topNav goverment">
                <div class="router" v-bind:class="{'pageActive':page === 'public'}" @click="changePage('public')">
                    <router-link to="public">
                        <div>政府</div>
                    </router-link>
                    <!-- <router-link to="public" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="">公众</router-link> -->
                </div>
            </div>
            <div class="col-md-12 resView">
                <router-view></router-view>
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
            msg:'hello resolve',
            page: 'goverment'
        }
    },
    methods:{
         show(){
            //  alert(1);
             show:true
         },
         hide(){

         },
         changePage(page) {
            this.page = page
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
    .row .router{
       width: 390px;
       height: 60px;
       color: #787878;
       font-size: 26px;
       background-color: #f8f8f8;
	   position: relative;
	   top:0;
	   left: -15px;
       border: 1px solid #f8f8f8;
       border-bottom-color: #eee;
       text-align: center;
       line-height: 60px;
   }
    .container .row .router.pageActive {
        background: #fff;
        border-bottom: none;
    }
    .container .row .router.pageActive a {
        color: #666;
    }
   /* 没有效果 */
   .row .router:horizontal{
       text-decoration: none;
       background-color: white;
       color: #20ACE6;
       border-top:blue 4px solid;
       border-bottom: none;
       border-left:none;
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

   .contact-information ul li{
       width: 100%;
       list-style-type: none;
       line-height: 44px; 
   }
   .contact-information p{
       font-weight: 700;
   }
   .resolve{
       /* margin: 20px; */
   }
   .resView{
       padding-top: 15px;
   }

    @media (max-width: 992px) {
        .topNav {
            padding-left: 0px;
            padding-right: 0px;
        }
        .topNav .router{
            width: 100%;
            left: 0;
        }
    }

</style>
