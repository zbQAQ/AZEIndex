<template>
    <div>
       <div class="container">
           <div class="row">
              <div class="col-md-4 left">
                <a href="#/page1" id="text">
                     <div class="img">
                        <img src="../../assets/image/enterprise1.jpg" alt="">
                     </div>
                     <span>
                          智慧工业园区
                     </span>
                </a>
                 <a href="#/page2" id="text">
                     <div class="img">
                        <img src="../../assets/image/enterprise2.jpg" alt="">
                     </div>
                     <span>
                          污染源在线监控系统
                     </span>
                 </a>
                 <a href="#page3" id="text">
                     <div class="img">
                        <img src="../../assets/image/enterprise3.jpg" alt="">
                     </div>
                     <span>
                          污染源排放全过程监控系统
                     </span>
                 </a>
              </div>
              <div class="col-md-4 " id="zx">
                <a href="#/page4" id="text">  
                  <div class="img">
                      <img src="../../assets/image/enterprise4.jpg" alt="">
                  </div>
                  <span>
                          VOCs在线监控系统
                     </span>
                </a>
                <a href="#/page5" id="text">  
                  <div class="img">
                      <img src="../../assets/image/enterprise5.jpg" alt="">
                  </div>
                  <span>
                          高空瞭望环境监控系统
                     </span>
                </a>
                <a href="#/page6" id="text">  
                  <div class="img">
                      <img src="../../assets/image/enterprise6.jpg" alt="">
                  </div>
                  <span>
                          IC刷卡排污总量控制管理系统
                     </span>
                </a>
              </div>
              <div class="col-md-4 " id="right">
                 <a href="#/page7" id="text">  
                    <div class="img">
                        <img src="../../assets/image/enterprise7.jpg" alt="">
                    </div>
                    <span>
                          扬尘噪声在线监测系统
                     </span>
                 </a>
                <a href="#/page8" id="text">   
                <div class="img">
                    <img src="../../assets/image/enterprise8.jpg" alt="">
                </div>
                <span>
                          企业环保通
                     </span>
                </a>
              </div>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"enterprise",
    data () {
       return{
           msg:'hello enterprise'
       }
    }
}
</script>
<style scoped>
   *{
       margin: 0;
       padding:0;
   }
  .comtainer{
     position: relative;
     top: 0;
     left: 0;
    
  }
  .container .row img{
     
      height: auto;
       width: 358px;
  }
  .container .row .img{
     margin: 10px 0;
     
      position: relative;
      top: 0;
      left: 0;
  }
  .container .row .col-md-4 {
      text-align: center;
      position: relative;
      top: 0;
      left: -18px;
  }
  #zx{
      position: relative;
      top: 0;
      left: -36px;

  }
  #right{
      position: relative;
      top: 0;
      left: -56px;
  }
  #text{
      text-decoration: none;
      color: #767676;
      font-size: 16px;
      font-weight: 700;
  }
  #text:hover{
      color:cornflowerblue;
  }

</style>


