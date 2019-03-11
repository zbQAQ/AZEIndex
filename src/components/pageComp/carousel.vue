<template>
	<div class="carBox">
		<div id="carousel-example-generic" class="carousel slide myCarousel hidden-xs" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <!-- <li data-target="#carousel-example-generic" data-slide-to="3"></li> -->
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner myInner" role="listbox">
        <div class="item" v-for="(item, index) of banner" :class="{'active': index == 0}" :key="index">
          <img :src="model + item.upload" alt="carousel">
          <div class="carousel-caption"></div>
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control myLeft" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control myRight" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
	</div>
</template>

<script>
import posts from '@/tools/request'
export default {
  name: 'mycarousel',
	props: [],
  data () {
    return {
      msg: 'hello mycarousel!',
      banner: [],
      model: 'http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/blog/img/'
		}
  },
  methods: {},
  async created() {
    const data = await posts.getBanner()
    if(data != null) {
      this.banner = data
    }
  }
}
</script>
<style scoped>
.carBox {
  margin-bottom: 50px
}
.myCarousel {
  max-height: 450px;
  margin-bottom: 50px;
}
.myCarousel .myInner {}

.myCarousel .myInner .item {
  transition-property: opacity;
}
.item,
.active.left,
.active.right {
    opacity: 0;
}
.active,
.next.left,
.prev.right {
    opacity: 1;
}
.next,
.prev,
.active.left,
.active.right {
    left: 0;
    transform: translate3d(0, 0, 0);
}
.carousel-control {
  z-index: 2;
}

@media (min-width: 1170px) {
  .myCarousel .myInner .item img {
    /* position: relative;
    top: 0;
    left: 50%;
    margin-left: -683px; */
  }
}

@media (min-width: 768px) {
 .carBox {
    margin-bottom: 0
  }
}

.myCarousel .myInner .item img {
  max-height: 450px;
  width: auto;
}

.myCarousel .myRight, 
.myCarousel .myLeft {
  opacity: 0.1;
  transition: 0.4s ease;
}
.myCarousel .myRight:hover,
.myCarousel .myLeft:hover {
  opacity: 0.9;
}
</style>