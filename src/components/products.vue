<template>
  <div class="container products">
    <div class="col-md-3 col-xs-12 leftNav">
      <div class="leftItem topTit"><div class="aze">产品中心</div></div>
      <router-link v-for="(item, index) in navList" :key="index"
        class="leftItem"
        v-bind:class="{'leftActive':page === item.path}" 
        :to="item.path"
      >
        <div class="box3-left" @click="productsChange(item.path)">
          <span class="fa fa-caret-right faHidden"></span>
          <span>{{item.name}}</span>
        </div>
      </router-link>

    </div>
    <div class="col-md-9 col-xs-12">
      
      <router-view />

    </div>
  </div>  
</template>
<script>
export default {
  name: "Products",
  data() {
    return {
      msg: "hello products",
      page: 'proAir',
      navList: [
        {path: 'proAir', name: ' 气 '},
        {path: 'proWater', name: ' 水 '},
      ]
    };
  },
  methods: {
    productsChange(path) {
      this.page = path
    }
  },
};
</script>
<style scoped>

.products {
  min-height: 93%;
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
