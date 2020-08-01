<template>
  <div id="raceinformations">
    <div class="container">
      <div class="row">
        <section class="mt-5 w-100">
          <h1>即將登場</h1>
            <template>
              <div role="tablist" class="mt-3 d-flex ">
                <b-card no-body class="mb-1 col" v-for="(text, index) in texts" :key="index">
                  <b-card-header header-tag="header" class="p-1 cardHeader" role="tab">
                    <b-button block v-b-toggle="'accordion-'+index" variant="info" size="lg">{{text.title}}</b-button>
                  </b-card-header>
                  <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <b-card-text>日期: {{ text.date }}</b-card-text>
                      <b-card-text>地點: {{ text.place }}</b-card-text>
                      <b-card-text v-if="text.price" v-html="text.price"></b-card-text>
                      <b-card-text>賽事轉播: {{ text.tv }}</b-card-text>
                      <b-card-text>{{ text.imf }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

              </div>
            </template>
          </section>
          <section class="my-5 w-100">
            <h1 class="mb-3">精彩片段</h1>
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
          <h1 class="mb-3">精彩賽事</h1>
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
          imf: '今年因新型冠狀病毒（COVID-19）疫情導致2020東京奧運延期、各大國際單項賽事停辦或延期，教育部體育署表示，為提升我國培訓隊選手訓練強度、檢測訓練成效及強化選手鬥志，將於今（109）年8月1日至8日舉辦「模擬東京奧運對抗賽」，8月1日下午5時在國家運動訓練中心舉行開幕典禮。',
          place: '國訓中心',
          tv: '全程不開放觀眾進場，將提供賽事轉播服務。'
        },
        {
          title: '2020中華台北羽球公開賽',
          date: '109年9月1日(二) ~ 9月6日(日)',
          imf: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon  tempor, sunt aliqua put a bird',
          place: '臺北小巨蛋',
          price: '票價資訊: <p>&emsp;&emsp;活動前三日免票入場，後三日票價依序為八強賽300元、四強賽600元及決賽800元，預計活動前一個月開放線上售票，臺北小巨蛋服務台也將開放現場購票；另提供半價優惠票予65歲以上之年長者及身心障礙者，持優惠票入場者需檢附證明文件備查。</p>',
          tv: '未知。'
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
          src: 'https://www.youtube.com/watch?v=RDNsZAtLCFg&list=PLDB8ct-UxVonk7L-9Zm4Jl7aEYxeKGSrE&index=37&t=0s',
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
