<template>
  <div id="about" :style="{backgroundImage:`url('./images/bg.jpg')`}">
    <div class="container">
      <div class="row">
        <b-card no-body class="firstCard">
          <b-tabs v-model="tabIndex" align="right">
            <b-tab no-body title="技術特點" :title-link-class="tabsClass(0)">
              <div class="row">
                <div class="col-6 p-0">
                  <b-card-img src="http://220.128.133.15/s1090114/1596691413491.jpg"></b-card-img>
                    </div>
               <div class="col-6">
                  <b-card-text v-html="one"></b-card-text>
                </div>
               </div>
             </b-tab>
             <b-tab no-body title="2020" :title-link-class="tabsClass(1)">
              <div class="row">
                <div class="col-6 p-0">
                  <b-card-img src="https://picsum.photos/400/300/?random=2"></b-card-img>
                </div>
                <div class="col-6">
                  <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudant</b-card-text>
                </div>

              </div>
            </b-tab>
             <b-tab no-body title="經典名言" :title-link-class="tabsClass(2)">
               <div class="row">
                 <div class="col-6 p-0">
                  <b-card-img src="https://picsum.photos/400/300/?random=3"></b-card-img>
                 </div>
                 <div class="col-6">
                  <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudantium voluptates quidem quasi fuga ex tempora necessitatibus, impedit provident praesentium odio eligendi unde nemo voluptate dolor officiis sequi earum consequuntur non quis corporis! Sit ipsam itaque quam, cupiditate error fuga iure?</b-card-text>
                 </div>
               </div>
            </b-tab>
             <b-tab  no-body title="初露鋒芒" :title-link-class="tabsClass(3)">
               <div class="row">
                 <div class="col-6 p-0">
                   <b-card-img src="https://picsum.photos/400/300/?random=4"></b-card-img>
                 </div>
                 <div class="col-6 p-0">
                  <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudantium voluptates quidem quasi fuga ex tempora necessitatibus, impedit provident praesentium odio eligendi unde nemo voluptate dolor officiis sequi earum consequuntur non quis corporis! Sit ipsam itaque quam, cupiditate error fuga iure?</b-card-text>
                 </div>
               </div>
            </b-tab>
          </b-tabs>
        </b-card>

        <template>
          <h1 class="mt-5 mb-5">專訪影音</h1>
          <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
          <div class="images-wrapper d-flex justify-content-between" >
            <div class="image imageAbout" v-for="(image, imageIndex) in items" :key="imageIndex" @click="index = imageIndex" :style="{ background: 'url(' + image.thumb + ')', backgroundSize:'cover',backgroundPosition:'center'}">
              <p>{{image.text}}</p>
              <font-awesome-icon :icon="['far', 'play-circle']" class="text-white"></font-awesome-icon>
              <span>{{image.title}}</span>
            </div>
          </div>
        </template>
        <div class="team my-5">
          <h1 class="mt-md-5 mb-5">專業團隊</h1>
          <template >
            <u-animate-container>
              <u-animate name="animate__fadeInLeft" delay="0s" duration="1s" :iteration="1" :offset="350" animateClass="animated" :begin="false">
                  <div class="row no-gutters ">
                    <b-card-group deck>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="https://picsum.photos/600/300/?image=25" class="teamImg img-fluid rounded-circle" >
                        <h4 class="my-3">教練賴建誠</h4>
                        <p>在戰術的觀察及訓練計畫的擬定上，針對戴資穎失分的部分加強訓練，注重比賽過程的遠超過比賽結果</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="https://picsum.photos/600/300/?image=25" class="teamImg img-fluid rounded-circle" >
                        <h4 class="my-3">教練萬佳鑫</h4>
                        <p >曾經是台灣男子羽球選手，現任戴資穎專屬教練，平常訓練模擬戴資穎身高較高的對手。</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="https://picsum.photos/600/300/?image=25" class="teamImg img-fluid rounded-circle" >
                        <h4 class="my-3">防護員王詩婷</h4>
                        <p>無論是在戴資穎平時訓練或參加比賽，賽前的暖身及賽後的收操，都會陪伴在身邊。</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="https://picsum.photos/600/300/?image=25" class="teamImg img-fluid rounded-circle" >
                        <h4 class="my-3">體能師范瓚予</h4>
                        <p>針對戴資穎的體能進行訓練，提升反應力，使用遊戲的方式始使得訓練過程不枯燥。</p>
                      </b-card>
                    </b-card-group>
                  </div>
              </u-animate>
            </u-animate-container>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0,
      items: [
        {
          title: '戴資穎的故事',
          description: '影片來源: Red Bull',
          thumb: 'http://220.128.133.15/s1090114/1595379926192.jpg',
          src: 'https://youtu.be/E-z9LHFMz7I',
          text: 'play the video'
        },
        {
          title: '2017.05.27 戴資穎專訪',
          description: '影片來源: 民視',
          thumb: 'http://220.128.133.15/s1090114/1595555483216.jpg',
          src: 'https://youtu.be/nHXv3MtSocs',
          text: 'play the video'
        },
        {
          title: '2017.09.04 戴資穎專訪',
          description: '影片來源: 壹電視',
          thumb: 'http://220.128.133.15/s1090114/1595316559931.jpg',
          src: 'https://youtu.be/sTT-6d4ITUc',
          text: 'play the video'
        }
      ],
      index: null,
      one: '<h5 class="text-pink123 pb-2"><b>拿著球拍的魔術師</b></h5><p>戴資穎球路多變且步伐輕快，善於使用網前細膩的假動作在擊球的瞬間，造成時間差，破壞對手的啟動以及四角球拉吊突擊使對手因疲於奔命，並具備優異且有力的反拍控制能力，能讓對手猜不透球路，進而取得球場上的控制權而贏得勝利。</p><p>戴資穎於2017年馬來西亞羽球頂級超級賽中測得每小時366公里的球速。</p>'
    }
  },
  methods: {
    tabsClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-cyan', 'text-lighted']
      } else {
        return ['bg-info ', 'text-white']
      }
    }
  }
}
</script>
