<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <b-card no-body class="firstCard">
          <b-tabs v-model="tabIndex" align="right">
              <b-tab no-body title="技術特點" :title-link-class="tabsClass(0)">
               <div class="ttyWords">
                 <div class="wordsImg">
                  <b-card-img src="https://i.imgur.com/oc5zSyF.jpg"></b-card-img>
                 </div>
                 <div class="wordsWords">
                    <b-card-text v-html="one"></b-card-text>
                 </div>
               </div>
            </b-tab>
             <!-- <b-tab no-body title="2020" :title-link-class="tabsClass(1)">
              <div class="row">
                <div class="col-6 pr-0">
                  <b-card-img src="https://i.imgur.com/wiwUG22.jpg"></b-card-img>
                </div>
                <div class="col-6">
                  <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudant</b-card-text>
                </div>

              </div>
            </b-tab> -->
             <b-tab no-body title="經典名言" :title-link-class="tabsClass(1)">
               <div class="ttyWords">
                 <div class="wordsImg">
                  <b-card-img src="https://i.imgur.com/KKMOCS9.jpg"></b-card-img>
                 </div>
                 <div class="wordsWords">
                  <b-card-text><p><span class="text-pink123456">ღ</span>對自己好的事，就去做！</p><p><span class="text-pink123456">ღ</span>人生只有一回，不能讓自己留下遺憾。</p><p><span class="text-pink123456">ღ</span>戰場上沒有永遠的贏家，只有不斷努力的人，我會加油，我沒有忘記那99％的鼓勵。</p><p><span class="text-pink123456">ღ</span>即使到了排名第一，也依然要學習著承受輸的感覺，因為那是嚐到勝利果實的必經過程。</p><p><span class="text-pink123456">ღ</span>輸，也要讓對手贏得很艱難！</p><p><span class="text-pink123456">ღ</span>輸輸贏贏是運動員生涯的常態，怎麼調適自己再重新來過，是最重要的。</p></b-card-text>
                 </div>
               </div>
            </b-tab>
             <!-- <b-tab  no-body title="初露鋒芒" :title-link-class="tabsClass(3)">
               <div class="row">
                 <div class="col-6 p-0">
                   <b-card-img src="https://i.imgur.com/gtAuWOC.jpg"></b-card-img>
                 </div>
                 <div class="col-6 pr-0">
                  <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudantium voluptates quidem quasi fuga ex tempora necessitatibus, impedit provident praesentium odio eligendi unde nemo voluptate dolor officiis sequi earum consequuntur non quis corporis! Sit ipsam itaque quam, cupiditate error fuga iure?</b-card-text>
                 </div>
               </div>
            </b-tab> -->
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
        <div class="my-5">
          <h1 class="mt-md-5 mb-5">專業團隊</h1>
          <template >
            <u-animate-container>
              <u-animate name="animate__fadeInLeft" delay="0s" duration="1s" :iteration="1" :offset="350" animateClass="animated" :begin="false">
                  <div class="row no-gutters ">
                    <b-card-group deck>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="../../public/images/00001.jpg" class="teamImg img-fluid" >
                        <h5 class="my-3">教練賴建誠</h5>
                        <p>在戰術及訓練計畫的擬定，針對失分的部分加強訓練，注重比賽過程的遠超過比賽結果。</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="../../public/images/00002.jpg" class="teamImg img-fluid" >
                        <h5 class="my-3">教練萬佳鑫</h5>
                        <p >曾經是台灣男子羽球選手，現任戴資穎專屬教練，平常訓練模擬戴資穎身高較高的對手。</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="../../public/images/00003.jpg" class="teamImg img-fluid" >
                        <h5 class="my-3">防護員王詩婷</h5>
                        <p>無論是訓練或比賽、賽前的暖身及賽後的收操，守候戴資穎並解決她生理上的不適。</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="../../public/images/00004.jpg" class="teamImg img-fluid" >
                        <h5 class="my-3">體能師范瓚予</h5>
                        <p>針對戴資穎的體能進行訓練，提高反應力，利用遊戲的方式使得訓練過程不枯燥。</p>
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
      one: '<h5 class="text-pink123 pb-2"><span class="text-warning">ღ</span><b>拿著球拍的魔術師</b></h5><p>戴資穎球路多變且步伐輕快，善於使用網前細膩的假動作在擊球的瞬間，造成時間差，破壞對手的啟動以及四角球拉吊突擊使對手因疲於奔命，並具備強而有力的反拍控制能力，能讓對手猜不透球路，進而取得球場上的控制權而贏得勝利。</p><p>戴資穎於2017年馬來西亞羽球頂級超級賽中測得每小時366公里的球速。</p><h5 class="text-pink123 pb-2"><span class="text-warning">ღ</span><b>2020年進化成「戴資穎2.0」</b></h5><p>在2020年全英公開賽上展現她與過往不同的一面：「耐心。」在賽事中化解所有的攻擊，同時伺機做出反擊，並且靠著精準的壓線球，獲得「戴資鷹」的稱號。</p>'
    }
  },
  methods: {
    tabsClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-info', 'text-white']
      } else {
        return ['bg-cyan', 'text-darked']
      }
    }
  }
}
</script>
