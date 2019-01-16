<template>
  <div id="app">

    <myHeader />
    
      <router-view/>

    <myFooter />

  </div>
</template>

<script>
import myHeader from './components/myheader'
import myFooter from './components/myfooter'
export default {
  name: 'App',
  components: {
    myHeader, myFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.temp {
  width: 100%;
  height: auto;
}
.tempCont{
  
}
img {
  width: 100%;
  height: 100%;
}
</style>
