<template>
  <div id="products">
      <div class="container">
        <section class="d-flex mt-5">
          <div class="col-4 col-md-3">
            <h3 class="text-center">商品分類</h3>
            <hr>
            <router-link to="/products/allProducts"><h3>◆全部商品</h3></router-link>
            <router-link to="/products/facialMask"><h3>◆面膜</h3></router-link>
            <router-link to="/products/clothes"><h3>◆上衣</h3></router-link>
            <router-link to="/products/souvenir"><h3>◆飾品 / 紀念品</h3></router-link>
            <router-link to="/products/vt"><h3>◆Victory系列</h3></router-link>
            <router-link to="/products/bags"><h3>◆背包 / 帽子</h3></router-link>
            <router-link to="/products/limited"><h3>◆限量組合包</h3></router-link>
          </div>
          <div class="col-8 col-md-9">
            <router-view class="bg-warning"></router-view>
            </div>
        </section>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#products{
     a {
    color: black !important;
  }
}
</style>
