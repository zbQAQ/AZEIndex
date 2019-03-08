<template>
  <div id="app">
    <myHeader/>

    <router-view/>

    <myFooter/>
  </div>
</template>

<script>
import myHeader from "./components/pageComp/myheader";
import myFooter from "./components/pageComp/myfooter";

export default {
  name: "App",
  components: {
    myHeader,
    myFooter
  },
};
</script>

<style>
/** global Style */
@import "./global.css";
#app {
  position: relative;
  width: 100%;
  min-height: 100%;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
} */
</style>
