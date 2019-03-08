<template>
  <div class="container newsChildCnt">
    <div v-show="!loadingFlag">
      <div class="box1">
        <span>{{newsDetail.title}}</span>
        <p>{{newsDetail.time}}</p>
      </div>
      <div class="content" v-html="newsDetail.content"></div>
      <goBack :upPath="upPath"/>
    </div>
    <loading v-show="loadingFlag"/>
  </div>
</template>
<script>
import goBack from "./pageComp/goBack";
import posts from '@/tools/request'
import loading from './pageComp/loading'
export default {
  name: "newsChild",
  data() {
    return {
      msg: "hello newsChild",
      upPath: "/news",
      newsDetail: {},
      loadingFlag: true
    };
  },
  async created() {
    let newsId = this.$route.query.newsId
    const data = await posts.getNewsDetail(newsId)
    data.content = this.unescape(data.content)
    setTimeout(() => {
			this.newsDetail = data
			this.loadingFlag = false
		}, 300)
	},
  components: {
    goBack, loading
  },
  methods: {
    unescape(html) {
      return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, "&amp;")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, ' " ')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, "123");
    }
  },
};
</script>
<style>
.newsChildCnt {
  padding-bottom: 110px;
}
.newsChildCnt .box1 {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  margin-bottom: 20px;
  line-height: 40px;
}
.newsChildCnt .box1 span {
  font-weight: 700;
  color: black;
  font-size: 24px;
}
.newsChildCnt .box1 p {
  color: #ccc;
}
.newsChildCnt .box2 p {
  font-size: 16px;
  line-height: 2.2;
  text-indent: 2em;
}
.newsChildCnt .content {
  color: #2b2b2b;
  line-height: 1.8;
  font-size: 16px;
  text-indent: 2em;
}
.newsChildCnt .content .smallTit {
  margin-bottom: 18px;
}
.newsChildCnt .content p,
.newsChildCnt .content .img {
  margin-bottom: 12px;
}
.newsChildCnt .content .img {
  text-align: center;
}
.newsChildCnt .content .img .cntImg {
  width: auto;
  height: auto;
  margin: 15px auto;
  border-radius: 2px;
}
.newsChildCnt .content h4 {
  font-weight: 700;
  margin-bottom: 25px;
  font-size: 20px;
}
.newsChildCnt .content .ind3 {
  text-indent: 3em
}
.newsChildCnt .content .ind4 {
  text-indent: 4em
}
.newsChildCnt .content .ind5 {
  text-indent: 5em
}
.newsChildCnt .content .ind6 {
  text-indent: 6em
}
</style>
