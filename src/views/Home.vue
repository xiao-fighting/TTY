<template>
  <div id="home">
    <div class="row">

    <section id="section01" class="col-12">
      <template>
        <agile ref="carousel" :autoplay="true" :speed="1000" :autoplaySpeed="10000" :fade="false">
          <img class="slide" src="../../public/images/02.jpg">
          <!-- <img class="slide " src="../../public/images/03.jpg"> -->
          <img class="slide" src="../../public/images/00.jpg">
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
    <section id="section02">
      <template>
          <img src="../../public/images/aboutsec01.jpg" class="sec02img" v-parallax.modifier="0.5">
        <Timeline class="mb-5" :timeline-items="timelineItems" :message-when-no-items="messageWhenNoItems" :unique-year="true" order="asc"/>
      </template>
    </section>
  </div>
</template>

<script>
import Timeline from 'timeline-vuejs'
export default {
  components: {
    Timeline
  },
  data () {
    return {
      messageWhenNoItems: 'There are not items',
      timelineItems: [
        {
          // 注意:套件的月之數字呈現在網頁上會自動加ㄧ，所以在程式碼上要減一
          from: new Date(2020, 2),
          title: '全英第三冠，創超級賽史上女單最多冠',
          description:
          '參加全英公開賽，在決賽中以2比0（21-19、21-15）擊敗中國好手陳雨菲，三度奪得全英公開賽冠軍，創下超級賽女單最多冠(21冠)紀錄外，並於次周積分超越中國的陳雨菲五度登上世界球后寶座。因新冠肺炎影響，世界羽球聯盟(BWF)將世界排名自2020年3月17日起凍結，故世界第一週數累計至2020年3月23日止共148週。',
          color: '#17a2b8'

        },
        {
          from: new Date(2017, 7),
          title: '世錦賽',
          description:
          '由於世錦賽與台北世大運撞期，而放棄以第一種子參加世錦賽的機會留在台灣參加世大運，她說：「可以讓台灣被世界看見，是一件我覺得很美好的事情。」最終奪下女子單打及混合團體兩面金牌。<br><a href="https://www.facebook.com/SportTaipei/videos/843807322461540/">賽前影片連結</a>',
          color: '#17a2b8'

        },
        {
          from: new Date(2016, 10),
          title: '登頂世界球后',
          description:
          '她參加香港超級賽，於決賽中以2比0（21-15、21-17）擊敗印度的辛度而封后，拿下生涯第2個香港公開賽冠軍。她在本賽事奪冠後，世界排名積分亦超過了前任球后卡羅列娜·馬琳，成為台灣歷史上第一位世界球后。',
          color: '#17a2b8'

        },
        {
          from: new Date(2011, 6),
          // title: 'Name',
          description:
          '17歲參加美國羽球黃金大獎賽，一舉奪金，贏得國際賽事第一座冠軍。',
          color: '#17a2b8'

        },
        {
          from: new Date(2010, 5),
          // title: 'Name',
          description:
          '參加超級系列賽－新加坡羽球超級賽,從資格賽起，便一路擊敗廣瀨榮理子、莎拉姬·波薩娜、裴延姝等世界名將，最後僅在決賽以0比2（18-21、15-21）惜敗給印度選手塞娜·內維爾，贏得個人生涯第一個超級系列賽銀牌，冠亞軍當天剛好是戴資穎生日，下場前，現場的觀眾、球迷都在幫她唱生日快樂歌，成為了她生涯中最難忘的一次比賽。',
          color: '#17a2b8'
        },
        {
          from: new Date(2009, 9),
          title: '初露鋒芒',
          description:
          '始於2009年，15歲的戴資穎參加越南羽球大獎賽，一舉拿下了亞軍，獲得世界羽球聯盟(BWF)積分，從此踏入國際巡迴賽程，',
          color: '#17a2b8'
        }
      ],
      screenWidth: document.body.clientWidth,
      // isShow: true,
      expandOnHover: true
    }
  },
  methods: {
    // toggleWelcome () {
    //   this.isShow = !this.isShow
    // },
    // expandonhover () {
    //   return (this.screenWidth < 1000) ? this.expandOnHover : !this.expandOnHover
    // }
  },
  mounted () {
    // const that = this
    // window.onresize = () => {
    //   return (() => {
    //     window.screenWidth = document.body.clientWidth
    //     that.screenWidth = window.screenWidth
    //   })()
    // }
  },
  watch: {
    // screenWidth (val) {
    //   if (!this.timer) {
    //     this.screenWidth = val
    //     this.timer = true
    //     const that = this
    //     setTimeout(function () {
    //       // that.screenWidth = that.$store.state.canvasWidth
    //       console.log(that.screenWidth)
    //       that.timer = false
    //     }, 400)
    //   }
    // }
  }
}
</script>

<style lang="scss">
#home{
  display: flex;
  flex-direction: column;
  height: 100% ;
  a{
    color: #17a2b8 !important;
  }
}
  // #section01{
  //   position: relative;
  // }

//  #section01{
//    height: 20%;
//  }
 #section02,#section03{
  //  overflow: hidden;
  height: 100% !important;

  }

  // @media (max-width:576px){
  //    #section01,#section02,#section03{
  //     height: 100%;

  //   }
  // }
  // @media (min-width:992px){
  //   #section01,#section02,#section03{
  //     // position: relative;
  //     height: 100%;

  //   }
  // }

  section:nth-last-child(even){
    // background: lightblue;
    height: 100%;
    // display: block;
  }

#home{
  overflow: hidden;
// VueAgile styles
    .agile {
      .agile__list{
        display: flex;
      }
      .agile__nav-button {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        font-size: 24px;
        height: 100%;
        position: absolute;
        top: 0;
        transition-duration: 0.3s;
        width: 15vw;
      }
      .agile__nav-button--prev {
        left: 0;
        &:hover {
          background: linear-gradient(-90deg, transparent, rgba(#000, 0.5));
          opacity: 1;
        }
      }
      .agile__nav-button--next {
        right: 0;
        &:hover {
          background: linear-gradient(90deg, transparent, rgba(#000, 0.5));
          opacity: 1;
        }
      }

      .agile__dots {
        bottom: 10px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
      }

      .agile__dot {
        margin: 0 10px;
        button {
          background-color: transparent;
          border: 1px solid #fff;
          border-radius: 50%;
          cursor: pointer;
          display: block;
          height: 10px;
          font-size: 0;
          line-height: 0;
          margin: 0;
          padding: 0;
          transition-duration: 0.3s;
          width: 10px;
        }
        &:hover {
          button {
            background-color: #fff;
          }
        }
      }
      .agile__dot--current {
        button {
          background-color: #fff;
        }
      }
    }
    // Slides styles

    .slide {
      // object-fit: contain;
      width: 100%;
      height: 100%;
      // max-width: 100%
      // object-position: top;
      // object-fit: cover;
    }

}

  #section02{
  margin-top: 60px;

  .timeline-item .item[data-v-5c5ef65f]{
    border-left:5px solid #ccd5db;
    padding:20px 0 20px 15px;
    position:relative;
    width: 100%;
    }
  .timeline-item .date-item[data-v-5c5ef65f]{
    margin:0;
    text-transform:uppercase;
    font-size:16px;
    letter-spacing:2px;
    }
  .timeline-item .title-item[data-v-5c5ef65f]{
    margin:0;
    padding:5px 0;
    font-size:20px !important;
    font-weight:500;
    font-style: italic;
    color:#e64b84;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }

  .timeline-item .description-item[data-v-5c5ef65f]{
    font-weight:100;
    margin:0;
    text-align: justify;
    }
  .timeline-item .dot[data-v-5c5ef65f]{
    display:block;
    position:absolute;
    width:15px;
    height:15px;
    border-radius:50%;
    left:-10px;
    top:26px;
    }
  .timeline[data-v-30ba92e0]{
    margin-left: 2rem;
    // margin-right: -20px;
    text-align:left;
    width:100%;
    max-width:600px;
    }
  .timeline .wrapper-timeline[data-v-30ba92e0]{
    position:relative;
    }
  .timeline .wrapper-item[data-v-30ba92e0]{
    display:grid;
    grid-template-columns:100px 1fr;
    margin-bottom:20px;
    }
  .timeline .wrapper-item .section-year[data-v-30ba92e0]{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
    -ms-flex-direction:column;
    flex-direction:column;
    -webkit-box-pack:justify;
    -ms-flex-pack:justify;
    justify-content:space-between;
    -webkit-box-align:end;
    -ms-flex-align:end;
    align-items:flex-end;
    padding:15px;
    font-weight:700;
    font-size:18px;
    }
  .timeline .wrapper-item .section-year .year[data-v-30ba92e0]{
    margin:0;
    }
  .timeline .wrapper-item.unique-timeline[data-v-30ba92e0]{
    margin-bottom:0;
    }
    .sec02img{
      position: absolute;
      right: 5%;
      width: 40%;
      max-width: 80%;
      object-fit: contain;
      // margin-top: 3rem;
    }

    @media (min-width:0px) and (max-width: 576px){
      .timeline-item .title-item[data-v-5c5ef65f]{
        font-size:25px !important;
        }

      .timeline[data-v-30ba92e0]{
        margin-left: 0rem;
        padding-right: 2rem;
        // padding-right: 100px;
        text-align:left;
        width:100%;
        max-width:600px;
        }
      .timeline .wrapper-item .section-year[data-v-30ba92e0]{
        font-size:20px;
        }
      .sec02img{
          display: none;
      }

    }
     @media (min-width:576.1px) and (max-width: 767px) {
       .timeline[data-v-30ba92e0]{
        margin-left: 0.025rem;
        // padding-right: 100px;
        text-align:left;
        width:100%;
        max-width:600px;
        }
       .sec02img{
          display: none;
        }
     }
     @media (min-width:768px) and (max-width:1200px){
       .timeline[data-v-30ba92e0]{
        margin-left: 0.1rem;
        // padding-right: 100px;
        text-align:left;
        width:100%;
        max-width:600px;
       }
       .sec02img{
          position: absolute;
          left: 25%;
          top: 120%;
          width: 100%;
          // bottom: 0%;
          max-width: 75%;
          margin-top: 0.5rem;
          filter: opacity(12%);
        }

     }
     @media (min-width:1201px) and (max-width: 1920px){
       .timeline[data-v-30ba92e0]{
        margin-left: 1rem;
        // padding-right: 100px;
        text-align:left;
        width:100%;
        max-width:600px;
        }
       .sec02img{
          position: absolute;
          right: 8%;
          width: 40%;
          top:205%;
          // bottom: -93%;
          max-width: 80%;
          margin-top: 5rem;
          overflow: hidden;
          // filter: opacity(12%);
        }

     }
  }

</style>
