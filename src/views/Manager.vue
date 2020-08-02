<template>
  <div id="manager">
    <div class="container ">
      <!-- <h1 class="text-center mt-5">HELLO~</h1>
      <hr> -->
      <section>
        <div class="row justify-content-center mt-5">
          <router-link to="/manager/addproducts" class="col-3 p-0 text-center"><h3>新增產品</h3></router-link>
          <router-link to="/manager/lookcart" class="col-3 p-0 text-center"><h3>查看訂單</h3></router-link>
          <hr class="col-9">
          <router-view class="mt-3 bg-warning"></router-view>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#manager{
  a {
    color: black !important;
  }

}
</style>
