<template>
  <div class="loading" :style="{height: winH + 'px'}">
    <!-- <div class="mask"></div> -->
    <!-- <div class="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div> -->

    <div id="loader-container">
      <p id="loadingText">Loading</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {
      winH: 0
    };
  },
  mounted() {
    this.winH = document.documentElement.clientHeight - 110 - 70
  }
};
</script>
<style scoped>

#loader-container {
  width: 200px;
  height: 200px;
  text-align: center;
  color: #3498db;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  border: 5px solid #3498db;
  border-radius: 50%;
  -webkit-animation: borderScale 1s infinite ease-in-out;
  animation: borderScale 1s infinite ease-in-out;
}

#loadingText {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}

@-webkit-keyframes borderScale {
  0% {
    border: 5px solid white;
  }
  50% {
    border: 25px solid #3498db;
  }
  100% {
    border: 5px solid white;
  }
}

@keyframes borderScale {
  0% {
    border: 5px solid white;
  }
  50% {
    border: 25px solid #3498db;
  }
  100% {
    border: 5px solid white;
  }
}









.loading,
.mask {
  width: 100%;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8)
}
.loadEffect {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
  width: 100px;
  height: 100px;
  
}
.loadEffect span {
  display: inline-block;
  width: 30px;
  height: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  /* background: #a7a7a7; */
  background: #0251d9;
  position: absolute;
  -webkit-animation: load 1.04s ease infinite;
}
@-webkit-keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
.loadEffect span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -5px;
  -webkit-animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: 10px;
  top: 20px;
  -webkit-transform: rotate(45deg);
  -webkit-animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 10px;
  margin-left: -15px;
  -webkit-transform: rotate(90deg);
  -webkit-animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: 20px;
  right: 10px;
  -webkit-transform: rotate(135deg);
  -webkit-animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -5px;
  -webkit-transform: rotate(180deg);
  -webkit-animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: 10px;
  bottom: 20px;
  -webkit-transform: rotate(225deg);
  -webkit-animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 10px;
  left: 50%;
  margin-left: -15px;
  -webkit-transform: rotate(270deg);
  -webkit-animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: 20px;
  left: 10px;
  -webkit-transform: rotate(315deg);
  -webkit-animation-delay: 1.04s;
}
</style>

