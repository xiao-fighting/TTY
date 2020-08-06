<template>
  <div id="vtxr">
    <div class="container py-5 ">
      <div class="row m-0 vtt">
        <div class="col-6 " >
          <img src="../../../public/images/400vtxr.jpg" class="w-100">
        </div>
        <div class="col-6 vv">
          <div class="des">
            <h2 class="mt-1">{{items.text}}</h2>
            <div class="d-flex mt-5">
              <p><del>{{items.price}}</del></p>
              <p class="ml-5">{{items.discountPrice}}</p>
            </div>

            <div>
              <label for="demo">數量</label>
              <b-form-spinbutton id="demo" v-model="items.count" min="0" max="10" class="mb-2"></b-form-spinbutton>
              <b-button variant="outline-info" @click="addCart(items)">加入購物車</b-button>
            </div>

          </div>
        </div>
        <div class="col-12 vttext mt-5">
          <div v-html="items.destext"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items:
        {
          image: 'https://shoplineimg.com/5a13bfa1d4e39596590001eb/5ee79957a8927b2b89eb7e74/800x.webp?source_format=jpg',
          text: '勝利球拍 Drive X R',
          price: 'NT$4880',
          discountPrice: 'NT$3172',
          count: 0,
          destext: '<p><h4>商品描述</h4><h6>VICTOR勝利戴資穎比賽用球拍<br>由戴資穎御用專業穿線師戴爸親自為您穿拍(可指定打球慣用磅數)<br></h6>使用球線：勝利VBS-66n (白色)<br>球框材質：高強韌碳纖維 + TR增韌奈米碳管科技 + 增蕊填充技術<br>球拍重量/握柄尺寸：4U/G5<br><h6>★穿線工作日:3～5日(不含例假日)。<br>★因球拍含個人慣用磅數穿線服務，球拍瑕疵除外、售出後不退換貨。</h6></p>'
        }
    }
  },
  methods: {
    addCart (data) {
      if (this.count !== 0) {
        this.$store.commit('addCart', data)
      }
    }
  }
}
</script>

<style lang="scss">
// #vtxr{
//   width:100%;
//   height:100%;
// }
  .vv{
    position: relative;
  }
  .des{
    position: absolute;
    // margin-top: 15%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    bottom:0px;
    left: 10%;

  }
  .vttext{
    h6,p{
      letter-spacing:2px;
      line-height:40px;
      text-align: justify;
    }
  }
</style>
