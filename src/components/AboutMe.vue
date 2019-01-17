<template>
  <div class="container aboutMe">
    <div class="col-md-3 col-xs-12 leftNav">
      <div class="leftItem topTit"><div class="aze">公司介绍</div></div>
      <router-link v-for="(item, index) in navList" :key="index"
        class="leftItem"
        v-bind:class="{'leftActive':page === item.path}" 
        :to="item.path"
      >
        <div class="box3-left" @click="abouteChange(item.path)">
          <span class="fa fa-caret-right faHidden"></span>
          <span>{{item.name}}</span>
        </div>
      </router-link>

      <router-link class="leftItem" to="cooperation">
        <div class="aze" @click="abouteChange('cooperation')">产学研合作</div>
      </router-link>
    </div>
    <div class="col-md-9 col-xs-12">
      
      <router-view />

    </div>
  </div>  
</template>
<script>
export default {
  name: "AboutMe",
  data() {
    return {
      msg: "hello aboutMe",
      page: 'introduce',
      navList: [
        {path: 'introduce', name: '公司简介'},
        {path: 'culture', name: '企业文化'},
        {path: 'devHistory', name: '发展历程'},
        {path: 'honor', name: '荣誉资质'},
      ]
    };
  },
  methods: {
    abouteChange(path) {
      this.page = path
    }
  },
};
</script>
<style scoped>

.aboutMe {
  margin-bottom: 70px;
}

.aze {
  background-color: #20ace6;
  width: 100%;
	height: 40px;
	line-height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}
.topTit {
  cursor: default;
}
.aze a {
  color: #fff;
}
.container {
  padding-top: 40px;
}

a:link {
  text-decoration-line: none;
}
.faHidden {
	display: none;
  margin-right: 8px;
  font-size: 12px;
}

.leftNav {
	margin-bottom: 35px;
}

.leftItem {
	text-align: center;
}
.box3-left {
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  background-color: #f6f6f6;
  color: #666;
  margin-bottom: 2px;
}
.box3-left:hover {
  background-color: #75c3f1;
  color: #fff;
}

@media (min-width: 992px) {
	.leftItem {
		text-align: left;
	}
	.aze {
		padding-left: 10px;
	}
	.faHidden {
		display: inline-block;
	}
}

.leftActive .box3-left {
  background-color: #75c3f1;
  color: #fff;
}


</style>
