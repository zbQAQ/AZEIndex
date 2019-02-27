<template>
  <div class="backBox" @click="goBack">
    <div class="back">
      <span class="fa fa-arrow-left"></span>
    </div>
    <!-- <div class="backTips">
      <p>返回上一页</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "goback",
  data() {
    return {
      msg: "this is goback components"
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.backBox {
  position: fixed;
  right: 5%;
  bottom: 100px;
  text-align: center;
  cursor: pointer;
}
.backBox .back {
  width: 35px;
  height: 35px;
  line-height: 33px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 2px 2px 5px #999;
  transition: 0.2s ease;
}
.backBox .back:hover {
  background-color: #f5f5f5;
}
.backBox .backTips {
  position: absolute;
  left: 0;
  top: 0;
  width: 80px;
}

</style>
