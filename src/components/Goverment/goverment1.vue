<template>
   <div>
       {{msg}}
     <div class="row app">
          <div class="col-md-4">
            <div class="img">
                <div class="hover">
                     <a href="#">
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
                     <a href="#">
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
</template>
<script>
export default {
    data () {
        return{
            msg:'hello 三级嵌套'
        }
    }
}
</script>
