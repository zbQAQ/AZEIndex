<template>
	<div class="temp">
		<div class="container">
      <div class="caseBox">
        <h3 class="caseTit">安志生态客户案例区域分布图</h3>
        <div class="caseMap">
          <img src="/static/img/ch-map.jpg" alt="">

          <div class="mapBot guangdong">
            <div class="botName">
              <span class="fa fa-circle"></span>
              <span class="num">广东: 88</span>
            </div>
            <div class="botModal">
              <div class="tit">环保执法</div>
              <div class="txt">
                <div class="left">地点:</div>
                <div class="right">环境保护部西北环境保护督查中心</div>
              </div>
              <div class="txt">
                <div class="left">地点:</div>
                <div class="right">环境保护部西北环境保护督查中心</div>
              </div>
            </div>
          </div>
          <div class="mapBot shanghai">
            <div class="botName">
              <span class="fa fa-circle"></span>
              <span class="num">上海: 35</span>
            </div>
            <div class="botModal">
              <div class="tit">环保执法</div>
              <div class="txt">
                <div class="left">地点:</div>
                <div class="right">环境保护部西北环境保护督查中心</div>
              </div>
              <div class="tit">环保</div>
              <div class="txt">
                <div class="left">地点:</div>
                <div class="right">环境保护部西北环境保护督查中心</div>
              </div>
              <div class="tit">环法</div>
              <div class="txt">
                <div class="left">地点:</div>
                <div class="right">环境保护部西北环境保护督查中心</div>
              </div>
              <div class="txt">
                <div class="left">省厅:</div>
                <div class="right">环境保护部西北环境保21心</div>
              </div>
            </div>
          </div>
          <div class="mapBot hunan">
            <div class="botName">
              <span class="fa fa-circle"></span>
              <span class="num">湖南: 12</span>
            </div>
            <div class="botModal">
              <div class="tit">环保执法</div>
              <div class="txt">
                <div class="left">地点:</div>
                <div class="right">环境保护部西北环境保护督查中心</div>
              </div>
              <div class="txt">
                <div class="left">地点:</div>
                <div class="right">环境保护部西北环境保护督查中心</div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
	</div>
</template>
<script>
export default {  
  name: 'cuscase',
  data () {
    return {
			msg: 'hello cuscase!'
		}
  },
	methods: {}
}
</script>
<style scoped>

.caseBox {
  position: relative;
  margin-top: 35px;
  margin-bottom: 70px;
}
.caseBox .caseTit {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
}
.caseBox .caseMap {
  position: relative;
}
.caseBox .caseMap .mapBot{
  position: absolute;
}
.caseBox .caseMap .mapBot.guangdong {
  left: 827px;
  top: 820px;
}
.caseBox .caseMap .mapBot.shanghai {
  left: 989px;
  top: 589px;
}
.caseBox .caseMap .mapBot.hunan {
  left: 765px;
  top: 707px;
}
.caseBox .caseMap .mapBot .botName{
  color: #666;
  cursor: pointer;
}
.caseBox .caseMap .mapBot .botName:hover {
  color: #0251d9
}

/* .caseBox .caseMap .mapBot .botName .bot{}
.caseBox .caseMap .mapBot .botName .num{} */

.caseBox .caseMap .botModal {
  display: none;
  position: absolute;
  bottom: 25px;
  left: 50%;
  margin-left: -160px;
  min-width: 320px;
  border: 1px solid #999;
  padding: 10px 12px 8px;
  box-shadow: 3px 2px 5px #999;
  background: #fff;
  z-index: 99;
}
.caseBox .caseMap .mapBot:hover .botModal {
  display: block;
}

.caseBox .caseMap .botModal .tit {
  width: 100%;
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  padding-bottom: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.caseBox .caseMap .botModal .txt {
  margin-bottom: 5px;
}
.caseBox .caseMap .botModal .txt .left  {
  display: inline-block;
  width: 12%;
}
.caseBox .caseMap .botModal .txt .right {
  display: inline-block;
  width: 85%;
}

</style>
