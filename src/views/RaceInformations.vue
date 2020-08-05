<template>
  <div id="raceinformations" :style="{backgroundImage:`url('./images/bg.jpg')`}">
    <div class="container">
      <div class="row">
        <section class="mt-5 w-100">
          <h2>即將登場</h2>
            <template>
              <div role="tablist" class="mt-3 d-flex">
                <b-card no-body class="mb-1 col" v-for="(text, index) in texts" :key="index">
                  <b-card-header header-tag="header" class="p-1 cardHeader" role="tab">
                    <b-button block v-b-toggle="'accordion-'+index" variant="info" size="lg">{{text.title}}</b-button>
                  </b-card-header>
                  <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel" visible>
                    <b-card-body>
                      <b-card-text v-if="text.date">日期: {{ text.date }}</b-card-text>
                      <b-card-text v-if="text.place">地點: {{ text.place }}</b-card-text>
                      <b-card-text v-if="text.price" v-html="text.price"></b-card-text>
                      <b-card-text v-if="text.tv" v-html="text.tv"></b-card-text>
                      <b-card-text>{{ text.imf }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

              </div>
            </template>
          </section>
          <section class="my-5 w-100">
            <h2 class="mb-3">精彩片段</h2>
            <template>
              <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
              <div class="images-wrapper" >
                <div class="image imageAbout" v-for="(image, imageIndex) in items" :key="imageIndex" @click="index = imageIndex" :style="{ background: 'url(' + image.thumb + ')', backgroundSize:'cover',backgroundPosition:'center'}">
                <p >{{image.text}}</p>
                </div>
              </div>
            </template>
          </section>
          <section class="my-5 w-100">
          <h2 class="mb-3">經典賽事</h2>
          <template>
              <agile>
                <template >
                  <CoolLightBox :items="items2" :index="index" @close="index = null"></CoolLightBox>
                    <div class="images-wrapper" >
                          <div class="image imageAbout" v-for="(image, imageIndex) in items2" :key="imageIndex" @click="index = imageIndex" :style="{ background: 'url(' + image.thumb + ')', backgroundSize:'cover',backgroundPosition:'center'}">
                          <p >{{image.text}}</p>
                          </div>
                    </div>
                </template>
                <template >
                  <CoolLightBox :items="items3" :index="index" @close="index = null"></CoolLightBox>
                    <div class="images-wrapper" >
                          <div class="image imageAbout" v-for="(image, imageIndex) in items3" :key="imageIndex" @click="index = imageIndex" :style="{ background: 'url(' + image.thumb + ')', backgroundSize:'cover',backgroundPosition:'center'}">
                          <p >{{image.text}}</p>
                          </div>
                    </div>
                </template>
                <template slot="prevButton">
                  <font-awesome-icon :icon="['fas','chevron-left']"></font-awesome-icon>
                </template>
                <template slot="nextButton">
                  <font-awesome-icon :icon="['fas','chevron-right']"></font-awesome-icon>
                </template>
              </agile>
          </template>
          </section>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      texts: [
        {
          title: '模擬東京奧運對抗賽-羽球',
          date: '109年8月1日(六) ~ 8月3日(一)',
          imf: '今年因新型冠狀病毒（COVID-19）疫情導致2020東京奧運延期、各大國際單項賽事停辦或延期，為提升我國培訓隊選手訓練強度、檢測訓練成效及強化選手鬥志，將於109年8月1日至8日舉辦「模擬東京奧運對抗賽」。',
          place: '國訓中心',
          tv: '賽事轉播: <p>電視：愛爾達體育台、公共電視台；<br>網路：MOESPORTS</p>'
        },
        {
          title: '中華台北羽球公開賽(取消)',
          // date: '109年9月1日(二) ~ 9月6日(日)',
          imf: '最終決定以國家防疫和選手安全為優先，確定停辦今年賽事。'

        },
        {
          title: '新型冠狀病毒疫情影響的賽事',
          imf: '截至2020年7月29日止，韓國羽球公開賽、中國羽球公開賽、日本羽球公開賽、印尼羽球超級100賽、荷蘭羽球公開賽、韓國羽球大師賽等18項賽事確定取消'

        }
      ],
      tabIndex: 0,
      items: [
        {
          title: '2020全英公開賽 小戴奪冠精彩片段',
          description: '影片來源: 愛爾達體育家族 ELTA Sports',
          thumb: 'http://220.128.133.15/s1090114/1595316559931.jpg',
          src: 'https://youtu.be/4jE_ZZGjT9k',
          text: 'play the video'
        },
        {
          title: '2',
          description: '影片來源: 愛爾達體育家族 ELTA Sports',
          thumb: 'http://220.128.133.15/s1090114/1595316559931.jpg',
          src: 'https://youtu.be/4jE_ZZGjT9k',
          text: 'play the video'
        },
        {
          title: '2020全英公開賽女單八強戰-小戴',
          description: '',
          thumb: 'https://picsum.photos/600/300/?image=25',
          src: 'http://220.128.133.15/s1090114/1595379926192.jpg',
          text: 'play the video'
        },
        {
          title: '789',
          description: '',
          thumb: 'http://220.128.133.15/s1090114/1595379926192.jpg',
          src: '',
          text: 'play the video'
        },
        {
          title: '123',
          description: '',
          thumb: 'http://220.128.133.15/s1090114/1595379926192.jpg',
          src: '',
          text: 'play the video'
        },
        {
          title: '456',
          description: '',
          thumb: 'http://220.128.133.15/s1090114/1595379926192.jpg',
          src: '',
          text: 'play the video'
        },
        {
          title: '912',
          description: '',
          thumb: 'http://220.128.133.15/s1090114/1595379926192.jpg',
          src: '',
          text: 'play the video'
        },
        {
          title: '012',
          description: '',
          thumb: 'http://220.128.133.15/s1090114/1595379926192.jpg',
          src: '',
          text: 'play the video'
        }
      ],
      items2: [
        {
          title: '2020全英公開賽 小戴奪冠精彩片段',
          description: '影片來源: 愛爾達體育家族 ELTA Sports',
          thumb: 'http://220.128.133.15/s1090114/1595316559931.jpg',
          src: 'https://youtu.be/4jE_ZZGjT9k',
          text: 'play the video'
        },
        {
          title: '2',
          description: '影片來源: 愛爾達體育家族 ELTA Sports',
          thumb: 'http://220.128.133.15/s1090114/1595316559931.jpg',
          src: 'https://youtu.be/4jE_ZZGjT9k',
          text: 'play the video'
        },
        {
          title: '2020全英公開賽女單八強戰-小戴',
          description: '',
          thumb: '',
          src: '',
          text: 'play the video'
        },
        {
          title: '789',
          description: '',
          thumb: '',
          src: '',
          text: 'play the video'
        },
        {
          title: '789',
          description: '',
          thumb: '',
          src: '',
          text: 'play the video'
        },
        {
          title: '789',
          description: '',
          thumb: '',
          src: '',
          text: 'play the video'
        },
        {
          title: '789',
          description: '',
          thumb: '',
          src: '',
          text: 'play the video'
        },
        {
          title: '789',
          description: '',
          thumb: '',
          src: '',
          text: 'play the video'
        }
      ],
      items3: [
        {
          title: '3-1',
          description: '影片來源: 愛爾達體育家族 ELTA Sports',
          thumb: 'http://220.128.133.15/s1090114/1595316559931.jpg',
          src: 'https://youtu.be/4jE_ZZGjT9k',
          text: 'play the video'
        },
        {
          title: '3-2',
          description: '影片來源: 愛爾達體育家族 ELTA Sports',
          thumb: 'http://220.128.133.15/s1090114/1595316559931.jpg',
          src: 'https://youtu.be/4jE_ZZGjT9k',
          text: 'play the video'
        }
      ],
      index: null,
      slide: 0,
      sliding: null

    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = true
    }

  }
}
</script>
