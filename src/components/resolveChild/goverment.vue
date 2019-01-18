<template>
    <div>
        <div class="row app">
          <div class="col-md-4">
            <div class="img">
                <div class="hover">
                     <a href="#/resoDetail">
                         <div class="img-box">
                            <img src="../../assets/image/resolve-app.jpg" alt="app">
                        </div>
                        <span data-toggle="tooltip" data-placement="left" title="公众服务">公众服务APP</span>
                     </a>
                </div>
            </div>
         </div>
         <div class="col-md-4">
            <div class="img">
                <div class="hover">
                     <a href="#/resoDetail">
                         <div class="img-box">
                            <img src="../../assets/image/resolve-wx.jpg" alt="app">
                        </div>
                        <span data-toggle="tooltip" data-placement="left" title="申请投诉">申请投诉</span>
                     </a>
                </div>
            </div>
         </div>
       </div>
    </div>
    <!-- </div>     -->
</template>
<script>
export default {
    name:"resolve-child",
    data(){
        return{
            msg:"hello resolveChild"
        }
    },
    mounted() {
        console.log('in resolveChild')
    }
}
</script>
<style scoped>
  .hover a{
      text-decoration-line: none;
  }
  .img-box{
      margin: 0 0 10px 0;
  }
</style>
