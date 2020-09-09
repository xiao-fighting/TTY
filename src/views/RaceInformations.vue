<template>
  <div id="raceinformations">
    <div class="container">
      <div class="row">
        <section class="mt-5 w-100">
          <h2>即將登場</h2>
            <template>
              <div role="tablist" class="mt-3 raceComing">
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
              <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/EHt_nLLMYWQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2020年全英公開賽冠亞軍 戴資穎 VS 陳雨菲</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/J9EQ33hwH88" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2020年全英公開賽四強 戴資穎 VS 馬琳</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/qoNDa-RfS7s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2020年全英公開賽八強 戴資穎 VS 李美妙</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/gyuQ07Q7czc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2020年馬來西亞羽球大師賽冠亞軍 戴資穎 VS 陳雨菲</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/MKnfVNsiA1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2019年丹麥羽球公開賽冠亞軍 戴資穎 VS 奧原希望</p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/KzRk4-ln2uY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2019新加坡公開賽女單四強 戴資穎 VS 山口茜</p>
                </div>
                <!-- <div class="col-12 col-md-6 col-lg-4">
                  <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/B8DcFUylSLP/embed/captioned/?cr=1&amp;v=12&amp;wp=717&amp;rd=https%3A%2F%2Fletswritetw.github.io&amp;rp=%2Fletswrite-instagram-embed%2F#%7B%22ci%22%3A0%2C%22os%22%3A31151.745000010123%2C%22ls%22%3A488.7350000208244%2C%22le%22%3A488.7350000208244%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" height="458" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="background: white; max-width: 658px; width: calc(100% - 2px); border-radius: 3px; border: 1px solid rgb(219, 219, 219); box-shadow: none; display: block; margin: 0px 0px 12px; min-width: 326px; padding: 0px;"></iframe>

                </div> -->
              </div>
            </template>
          </section>
          <section class="mb-5 w-100">
          <h2 class="mb-3">經典賽事</h2>
          <template>
            <div class="row">
                  <div class="col-12 col-md-6 col-lg-4">
                    <iframe src="https://www.youtube.com/embed/QD7ZxoVp8xw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>2020全英公開賽冠亞軍 戴資穎 VS 陳雨菲 </p>
                  </div>
                  <div class="col-12 col-md-6 col-lg-4">
                    <iframe src="https://www.youtube.com/embed/HVR7KSJM1XM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>2020全英公開賽四強 戴資穎 VS 馬琳 </p>
                  </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/MiEE-2U46Ng" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2020年全英公開賽八強 戴資穎 VS 李美妙 </p>
                </div>

                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/sNhERoXFi58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2020年馬來西亞羽球大師賽四強 戴資穎 VS 何冰嬌 </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <iframe src="https://www.youtube.com/embed/JVy_JRNOmm0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2020年馬來西亞羽球大師賽八強 戴資穎 VS 辛度 </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                 <iframe src="https://www.youtube.com/embed/f3J9a8l81gM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  <p>2019年丹麥羽球公開賽冠亞軍 戴資穎 VS 奧原希望</p>
                </div>
            </div>

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
