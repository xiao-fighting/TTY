<template>
  <div id="about" >
    <div class="container">
      <div class="row">
        <b-card no-body class="firstCard">
          <b-tabs v-model="tabIndex" align="right">
            <b-tab no-body title="2020年" :title-link-class="tabsClass(0)">
              <b-card-img src="http://220.128.133.15/s1090114/1595212643551.jpg" class="w-50">全英賽四年三冠</b-card-img>
              <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudantium voluptates quidem quasi fuga ex tempora necessitatibus, impedit provident praesentium odio eligendi unde nemo voluptate dolor officiis sequi earum consequuntur non quis corporis! Sit ipsam itaque quam, cupiditate error fuga iure?</b-card-text>
            </b-tab>
             <b-tab no-body title="技術特點" :title-link-class="tabsClass(1)">
              <b-card-img src="https://picsum.photos/400/300/?random=2" class="w-50">全英賽四年三冠</b-card-img>
              <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudantium voluptates quidem quasi fuga ex tempora necessitatibus, impedit provident praesentium odio eligendi unde nemo voluptate dolor officiis sequi earum consequuntur non quis corporis! Sit ipsam itaque quam, cupiditate error fuga iure?</b-card-text>
            </b-tab>
             <b-tab no-body title="1234" :title-link-class="tabsClass(2)">
              <b-card-img src="https://picsum.photos/400/300/?random=3" class="w-50">全英賽四年三冠</b-card-img>
              <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudantium voluptates quidem quasi fuga ex tempora necessitatibus, impedit provident praesentium odio eligendi unde nemo voluptate dolor officiis sequi earum consequuntur non quis corporis! Sit ipsam itaque quam, cupiditate error fuga iure?</b-card-text>
            </b-tab>
             <b-tab  no-body title="初露鋒芒" :title-link-class="tabsClass(3)">
              <b-card-img src="https://picsum.photos/400/300/?random=4" class="w-50">全英賽四年三冠</b-card-img>
              <b-card-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum reprehenderit corporis fugiat iste quidem, dolores quis aperiam. A laudantium voluptates quidem quasi fuga ex tempora necessitatibus, impedit provident praesentium odio eligendi unde nemo voluptate dolor officiis sequi earum consequuntur non quis corporis! Sit ipsam itaque quam, cupiditate error fuga iure?</b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>

        <template>
          <h1 class="mt-5 mb-5">戴資穎專訪</h1>
          <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
          <div class="images-wrapper d-flex justify-content-between" >
            <div class="image imageAbout" v-for="(image, imageIndex) in items" :key="imageIndex" @click="index = imageIndex" :style="{ background: 'url(' + image.thumb + ')', backgroundSize:'cover',backgroundPosition:'center'}">
              <p>{{image.text}}</p>
              <font-awesome-icon :icon="['far', 'play-circle']" class="text-white"></font-awesome-icon>
              <span>{{image.title}}</span>
            </div>
          </div>
        </template>
        <div class="team mt-5">
          <h1 class="mt-md-5 mb-5">強而有力的團隊</h1>
          <template >
            <u-animate-container>
              <u-animate name="animate__fadeInLeft" delay="0s" duration="1s" :iteration="1" :offset="350" animateClass="animated" :begin="false">
                  <div class="row no-gutters ">
                    <b-card-group deck>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="https://picsum.photos/600/300/?image=25" class="teamImg img-fluid rounded-circle" >
                        <h4 >教練賴建誠</h4>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere corporis reprehenderit perferendis velit maxime illum atque omnis qui eveniet?</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="https://picsum.photos/600/300/?image=25" class="teamImg img-fluid rounded-circle" >
                        <h4 >教練萬佳鑫</h4>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere corporis reprehenderit perferendis velit maxime illum atque omnis qui eveniet?</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="https://picsum.photos/600/300/?image=25" class="teamImg img-fluid rounded-circle" >
                        <h4>防護員王詩婷</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere corporis reprehenderit perferendis velit maxime illum atque omnis qui eveniet?</p>
                      </b-card>
                      <b-card class="cardAbout col-12 col-sm-6 col-lg-3">
                        <img src="https://picsum.photos/600/300/?image=25" class="teamImg img-fluid rounded-circle" >
                        <h4>體能師范瓚予</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere corporis reprehenderit perferendis velit maxime illum atque omnis qui eveniet?</p>
                      </b-card>
                    </b-card-group>
                  </div>
              </u-animate>
            </u-animate-container>

          </template>
        </div>

        <div>
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
      index: null
    }
  },
  methods: {
    tabsClass (idx) {
      if (this.tabIndex === idx) {
        return ['bg-cyan', 'text-lighted']
      } else {
        return ['bg-greened ', 'text-light']
      }
    }
  }
}
</script>
