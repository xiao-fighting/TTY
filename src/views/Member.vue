<template>
  <div id="member">
    <div class="container ">
      <!-- <h1 class="text-center mt-5">HELLO~</h1>
      <hr> -->
      <section>
        <div class="row justify-content-center">
          <router-link to="/member/memberInf" class="col-3 p-0 text-center"><h3>會員資料</h3></router-link>
          <router-link to="/member/orderInf" class="col-3 p-0 text-center"><h3>訂單資訊</h3></router-link>
          <hr class="col-9">
          <router-view class="mt-3 bg-warning"></router-view>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#member{
  a {
    color: black !important;
  }

}
  #__BVID__49__BV_tab_container_{
    background:red;
  }

  section{
    margin-top:5rem;
    @media (max-width:577px) {
      h3{
        font-size:20px;
      }
      // a[href$=orderInf]{
      //   h3{
      //     margin-right:0.1rem;
      //   }
      // }
    }
  }

  #memberInf, #orderInf{
    width: 77%;
  }

</style>
