<template>
    <div class="container">
        <div class="col-md-3">
            <a href="#">
                <div class="aze">
                   公司介绍
                </div>
            </a>
                <a href="#">
                    <div class="box3-left">
                       <span>企业文化</span>
                    </div>
                </a>
                 <a href="#">
                    <div class="box3-left">
                       <span>发展历程</span> 
                    </div>
                </a>
                 <a href="#">
                    <div class="box3-left">
                       <span>荣誉资质</span> 
                    </div>
                </a>
                <div class="box4">
                    <span>产学研合作</span>
                </div>
            
        </div>
        <div class="col-md-9">
            <div class="box">
                <span 
                style="width:3px;height:40px;background-color:#20ace6;"
                ></span>
                 <span class="line">公司简介</span>

            </div>
            <div class="box2">
                <img src=".././assets/image/about1.jpg" alt="公司简介">
            </div>

            <div class="box5">
                <div class="box5-p1">
                     <p>
                       深圳市博安达信息技术股份有限公司（简称：博安达）成立于2000年，
                       总部位于深圳市高新技术产业园，目前在北京、上海、重庆、湖南、安徽、苏州、杭州、南宁等
                       地设有12个分公司和18个办事处。
                       截止2018年年初博安达为全国1300多个环保厅（局）提供了各类智慧环保系统解决方案，
                       用户群体包括环境部、省、地市、区县、乡镇共五级用户。公司在2002年被认定为“软件企业”，
                       2010年被认定为“国家级高新技术企业”，2012年通过CMMI3认证，2016年被深圳南山区政府授予“民营领军企业”称号，
                       2017年获得“计算机信息系统集成企业贰级资质”证书，目前拥有200多项自主知识产权的软件产品著作权，
                       涵盖环保领域主要业务线与底层支撑技术。
                     </p>
                </div>
                <div class="box5-p2">
                     <p>
                       公司在上海设立了研究院，与深圳大学组建了生态环境大数据联合实验室，让IT技术与环保行业紧密结合。
                       通过整合香港科技大学、深圳大学的产学研成果，将物联网、云计算、GIS应用、遥感监测、海量数据挖掘、
                       空气预测模型、环境模型模拟等最新科技融入到生态环境信息化管理应用中，对政务内网、政务外网、
                       移动应用以及智能终端数据进行信息化整合，为用户提供更全面的生态环境大数据整体解决方案。
                     </p>
                </div>
                <div class="box5-p3">
                     <p>
                        博安达成立18年来，一直秉承以用户为中心的服务理念，专注于生态环境大数据和智慧环保信息化应用，
                        为政府和企业提供智慧环保一体化综合解决方案。通过帮助环境管理者了解环境现状、分析环境问题及成因，
                        实现生态环境的精细监管、精准执法、科学决策，服务生态环境质量改善，全面支撑打好污染防治攻坚战，
                        促进生态环境管理水平迈上新台阶。
                     </p>
                </div>
                <div class="box6">
                    <a href="#">安志生态...第一期</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
      name: 'AboutMe',
  data () {
    return {
			msg: 'hello aboutMe'
		}
  }
}
</script>
<style scoped>
    /* *{
       text-decoration: none; 
        
    } */
    .aze{
        background-color: #20ace6;
        width: 220px;
        height: 40px;
        padding: 10px;
        font-size: 16px;
        font-weight: 600;
        color: aliceblue;
    }
    .aze a{
        color: aliceblue;
        
    }
    .container{
        padding-top: 40px;
    }
    .col-md-9{
       /* position: relative;
       top: 0;
       right:0; */
       float: right;
    }
    a:link{
        text-decoration-line: none;
    }
    .col-md-9 .box {
        background-color: #ededed;
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        border-left:5px #20ace6 solid;
    }
    .col-md-3{
        position: fixed;
    }
    .box2{
        padding-top:20px;
    }
    .box3-left{
        width: 220px;
        height: 40px;
        padding: 10px;
        font-size: 16px;
        /* font-weight: 600; */
        background-color: #f6f6f6;
        color: #946666;
        margin: 2px;
    }
    .box3-left:hover{
        background: #ccc;
    }
    .box4{
        background-color: #20ace6;
        width: 220px;
        height: 40px;
        padding: 10px;
        font-size: 16px;
        font-weight: 600;
        color: aliceblue;
    }
    .box5{
        margin-top: 40px;
        line-height: 2.5;
    }
    .box5 p{
        margin-top:40px;
    }
    .box6{
        margin-top: 40px;
    }
</style>
