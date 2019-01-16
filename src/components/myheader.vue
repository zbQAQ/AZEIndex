<template>
  <div class="temp">
    <nav class="navbar myNavbar navbar-fixed-top">
      <div class="container myContainer">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed myToggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand myNavbrand" href="#">
            <img src="../assets/logo.png" class="logo" alt="安志生态">
          </a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-right myNavCollapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav myNav">
            <li class="active"><a href="#">首页 <span class="sr-only">(current)</span></a></li>
            <li><a href="#/AboutMe">关于我们</a></li>
            <li><a href="#/News">新闻中心</a></li>
            <li><a href="#/Resolve">解决方案</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {}
  }
}
</script>

<style scoped>
.temp {
  padding-top: 70px;
}
.logo {
  width: auto;
}
.myNavbar{
  background: #0251d9;
  border-radius: 0px;
}
.myNavbar .myContainer {
  height: 70px;
}

.myNavbar .myContainer .myToggle{
  border-color: #ccc;
  margin-top: 20px;
}
.myNavbar .myContainer .myToggle .icon-bar{
  background: #f7f7f7;
}

.myNavbar .myContainer .myNavbrand {
  height: 70px;
}
.myNav>li>a {
  line-height: 35px;
  font-size: 16px;
}
.myNavCollapse {
  background: #0251d9;
}
.myNav li {
  transition: 0.4s ease;
  /* border-left: 5px solid transparent; */
}
.myNav li a {
  color: #fff;
}
.myNav li:hover{
  background-color: #14469c;
  border-left: 5px solid #C5C5C5;
}
.myNav li a:hover, .myNav li a:focus{
  background-color: transparent;
}
.myNav li.active{
  background-color: #14469c;
  border-left: 5px solid #C5C5C5;
}

@media (min-width: 768px) {
  /** 屏宽大于768 **/
  
  .myNav li {
    border-left: 0;
    border-top: 5px solid transparent;
  }
  .myNav li:hover{
    border-left: 0;
    border-top: 5px solid #C5C5C5;
    background-color: #14469c;
  }
  .myNav li.active{
    border-left: 0;
    border-top: 5px solid #C5C5C5;
  }
  
}
</style>
