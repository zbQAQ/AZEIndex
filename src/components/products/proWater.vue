<template>
	<div class="proWater">
    <div class="box">
      <span class="">水</span>
    </div>

    <div class="proBox">
      <div class="proItem col-md-4 col-sm-6 col-xs-12" v-for="(item, index) of proWater" :key="index" @click="goProDetail(item.id)">
        <img :src="item.imgUrl" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
	</div>
</template>
<script>
export default {
  name: 'proWater',
  data () {
    return {
      msg: 'hello proWater!',
      proWater: [
        {
          id: '4',
          name: '水质监测设备',
          imgUrl: '/static/img/products/szjc.jpg'
        },
        {
          id: '5',
          name: '无人船水质监测',
          imgUrl: '/static/img/products/wrc.jpg'
        }
      ]
		}
  },
	methods: {
    goProDetail(id) {
      this.$router.push({ path: 'proDetail', query: { proId: id }})
    }
  }
}
</script>
<style scoped>
@import "./pro.css";

</style>
