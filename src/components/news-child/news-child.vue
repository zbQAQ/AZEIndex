<template>
    <div class="container">
       <div class="box1">
           <span>广饶县开展网格化环境监管平台上线培训</span>
           <p>2019.01.17</p>
       </div>
       <div class="box2">
          <div>
            <p>
               12月19日，广饶县网格化环境监管平台上线培训会议召开。
               为进一步加强生态文明建设，创造良好的人居环境，广饶县积极推进以环境监管执法为抓手，
               坚持环保执法和刑事司法工作联动，进一步加大刑责治污力度，严厉打击偷排偷放等环境违法犯罪行为。
               本次共有全县100多名专职网格员参加培训。博安达作为承建单位，现场安排运维团队代表出席会议并进行现场讲解。
            </p>
          </div>
          <div class="img">
              <img src="../.././assets/image/1.jpg" alt="新闻1">
          </div>
          <div class="p">
              <p>
                  在培训中，博安达运维团队代表首先介绍了广饶县网格化环境监管平台，
              随后介绍了污染源普查、网格监管、专职网格等相关工作。
              现场就网格化环境监管平台及APP操作、网格工作办法等全面详解。
              </p>
          </div>
       </div>
       <div class="box3">
           <div class="box3-p">
               <p>
                   参会的环保工作者们认真听讲同时，结合要点即时笔记，
                   让培训知识尽快转化为标准化工作清单。
                   此外，参加会议的网格员们在现场观看平台演示后，
                   纷纷表示通过培训学习，
                   使系统操作和任务办理更加高效顺畅，
                   平台运行更让环境污染从监测监管到处理上报的程序大大简化，大幅提升了工作效率。
               </p>
           </div>
           <div class="box3-img">
               <img src="../.././assets/image/news1.jpg" alt="新闻2">
           </div>
           <div class="box3-span">
               <span>
                   据悉，山东省东营市广饶县环境监管网格平台2017年起启动建设。
                   按照"属地管理、分级负责、全面覆盖、责任到人"的原则建设，
                   科学构建了广饶县市级、区级、街道的三级网格监管责任体系，
                   通过信息化整合移动执法、视频监控、水质在线监测系统和空气自动监测站，将数据监测、
                   视频监控和水质预警等功能融为一体，包含污染源、智慧环保、网格监管、
                   行政执法等功能模块，实现了环境监管的规范化、精细化、长效化
                   ，能够全面高效地调度全县环境执法资源，为从源头减少环境隐患、
                   促进当地环境安全、提升生态环境质量提供了有力保障。
               </span>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    name:"news-child",
   data(){
       return {
       msg:"hello news-child"
       }
   }    
}
</script>
<style scoped>
   .box1{
       border-bottom: 1px solid #ccc;
       padding: 20px 0;
       margin-bottom: 20px;
       line-height: 40px;
   }
   .box1 span{
        font-weight: 700;
        color: black;
       font-size: 24px;
       
   }
   .box1 p{
      color: #ccc;
   }
   .box2 p{
       font-size: 16px;
       line-height: 2.2;
       text-indent:2em;
   }
   .box2 .img{
       text-align: center;
    }
   .box2 img{
        max-width: 600px;
   }
   .box .img{
       
   }
   .box2 .p{
       margin-top: 80px;

   }
   .box3 .box3-img{
       text-align: center;
   }
    .box3 .box3-img img {
        max-width: 600px;
    }

   .box3 .box3-p{
       font-size: 16px;
       line-height: 2.2;
       text-indent:2em;

   }
   .box3 .box3-span{
       text-indent: 2em;
       line-height: 2.2;
       font-size: 16px;
       margin-top: 80px;
       margin-bottom: 60px;
   }
</style>
