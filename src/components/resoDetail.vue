<template>
  <div class="temp resoDetail">
    <div class="container">
      <div class="row detail">
        <div class="title">{{resolve.name}}</div>

        <div class="cont" v-if="resolve.desc">
          <div class="contTit">系统概述</div>
          <div class="content" v-html="resolve.desc"></div>
        </div>
        <div class="cont" v-if="resolve.trait">
          <div class="contTit">系统特点</div>
          <div class="content" v-html="resolve.trait"></div>
        </div>
        <div class="cont" v-if="resolve.func">
          <div class="contTit">系统功能</div>
          <div class="content" v-html="resolve.func"></div>
        </div>
      </div>

    </div>

		<goBack />

  </div>
</template>
<script>
import goBack from './pageComp/goBack'
import posts from '@/tools/request'
export default {
  name: "resolveDetail",
  data() {
    return {
      msg: "hello resolve detail!",
      resolve: {}
    };
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
  async created() {
    let detailId = this.$route.query.resoId
    const data = await posts.getResolveDetail(detailId)
    data.desc = this.unescape(data.desc)
    data.trait = this.unescape(data.trait)
    data.func = this.unescape(data.func)
    this.resolve = data
	},
	components: {
		goBack
	}
};
</script>
<style scoped>
.resoDetail {
  min-height: 93%;
}
.detail {
  margin: 35px 0 70px 0;
}
.title {
  width: 100%;
  line-height: 40px;
  font-size: 26px;
  font-weight: bold;
  /* border-bottom: 1px solid #eee;
	margin-bottom: 15px;
	padding-bottom: 15px; */
  text-align: center;
  margin-bottom: 25px;
}

.cont {
  margin-bottom: 35px;
}
.cont .contTit {
  font-size: 22px;
  border-bottom: 1px solid #eee;
  margin-bottom: 15px;
  padding-bottom: 15px;
  font-weight: bold;
}
.cont .content {
  font-size: 16px;
  line-height: 35px;
}
.cont .content >>> .cntImg {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  margin-top: 10px;
}
.cont .content p {
  text-indent: 2em;
}
.cont .content >>> h4 {
  font-weight: 700;
  margin: 25px 0 8px 0;
}
.cont .content >>> .ind2 {
  text-indent: 2em;
}

@media (min-width: 768px) {
  .detail {
    margin-right: -15px;
    margin-left: -15px;
  }
}

</style>
