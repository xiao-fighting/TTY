<template>
  <div id="questions" :style="{backgroundImage:`url('./images/bg.jpg')`}">
    <div class="container">

      <h3 class="text-center pt-5 text-info">購物須知</h3>
      <p class="text-center">歡迎您來到穎迷線上購物網站，為了維護您的權益，請詳閱本商店之約定條款。</p>
      <div>
        <b-card no-body>
          <b-tabs pills card vertical>
            <b-tab title="訂單相關" active >
              <b-card-text v-html="order1"></b-card-text>
              </b-tab>
            <b-tab title="配送相關"><b-card-text v-html="order2"></b-card-text></b-tab>
            <b-tab title="常見問答">
              <b-card-text>
                 <div role="tablist" class="cq">
                  <b-card no-body class="mb-1 col" v-for="(cq, index) in commonQuestions" :key="index">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <b-button block v-b-toggle="'accordion-'+index" variant="outline-info" size="md" class="text-left">{{cq.title}}</b-button>
                    </b-card-header>
                    <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel" visible>
                      <b-card-body>
                        <b-card-text v-html="cq.ans"></b-card-text>
                      </b-card-body>
                    </b-collapse>
                  </b-card>

                </div>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order1: '<h5 class="text-info">◆關於訂單</h5><ol><li>1. 本網站保留訂單接受與否之權利，若因意外等狀況導致無法接受您的訂單，將使用電話、MAIL或站內訂單留言與您聯繫，可更換訂單內容或辦理退款，如造成您的不便，敬請見諒。</li><p></p><li>2. 訂購多樣商品，請於同一購物車結帳，若分開結帳產生二筆以上之訂單，請依各別的專用付款方式/帳號完成付款，恕系統無法合併付款與合併訂單出貨，請務必留意。</li></ol>',
      order2: '<h5 class="text-info">◆出貨時間為平日週一至週五，所訂購的商品於1-3天內出貨。</h5><p>1、貨運：寄出後約隔1~2天會到。</p><p>2、7-11到店純取貨：例如15號寄出，預計17~18號會配達指定7-11門市，本網站系統會發MAIL通知，7-11系統也會發簡訊通知，請務必留意當初於網站購物時所登記之MAIL信件以及手機簡訊通知，需於包裹抵達門市起算 7日內取貨，取貨時務必攜帶與收貨人同姓名之證明證件(如：身份證、健保卡、駕照)，逾期未取貨者需負擔再次寄送之運費60。</p><p>3、7-11取貨付款：例如15號寄出，預計17~18號會配達指定7-11門市，SHOPLINE系統會發MAIL通知，7-11系統也會發簡訊通知，請務必留意當初於網站購物時所登記之MAIL信件以及手機簡訊通知，需於包裹抵達門市起算 7日內取貨，取貨時建議攜帶與收貨人同姓名之證明證件(如：身份證、健保卡、駕照)，逾期未取貨者，於半年內累積滿2次未取貨紀錄，帳號將會被加入黑名單，並無法使用超商取貨付款之服務。</p><p>4、外島郵寄：使用中華郵政包裹，寄出後約隔3~7天左右會到。</p><p>5、海外寄送：香港(HK)、澳門(MO)、大陸(CN)等地使用中華郵政包裹寄出。</p><h5 class="text-info">◆特別注意:</h5><p>※若收件人資訊不完整、手機號碼、MAIL信箱等有誤、收件人無法收貨、遇意外天災、系統設備維護、調貨、盤點、等工廠補貨等情況，出貨時間將順延，敬請見諒。</p><p>※包裹寄出後，若因收件人資料錯誤、收件人無法收貨或收件地址無人代簽收而導致包裹被退回，收件人需補運費後再次寄出。</p><p>※以上配達時間為預估時間，實際配送狀況需依當地配送司機大哥為主，無法承諾配達時間，若有送禮、出國或其他特殊原因者，需自行承擔時效之風險。</p><p>※超取包裹到店會後發送取貨通知簡訊，若您使用電信公司拒收商務廣告簡訊之服務或長時間未開機，將可能導致無法接收包裹到店通知簡訊。</p><p>※若遇天災不可抗拒之因素以及部分超商門市因週末不營業或其他特殊原因，包裹有可能需要更多的工作天數才能到達取貨門市。</p>',
      commonQuestions:
      [
        {
          title: 'Q1、可以合併訂單嗎?',
          ans: 'ANS：如您要訂購多樣商品，請於同一購物車結帳，若分開結帳產生二筆以上之訂單，請依各別的專用付款方式/帳號完成付款，恕系統無法合併付款與合併訂單出貨，請務必留意。'
        },
        {
          title: 'Q2、可以取消訂單嗎?',
          ans: 'ANS：尚未付款之訂單，請不要付款即可。若要取消已經付款完成之訂單，請聯絡TTY線上購物網站客服人員，提問時請一併給予訂單編號以供查詢/回覆。'
        },
        {
          title: 'Q3、訂單可以加購嗎?',
          ans: 'ANS：尚未付款之訂單，請不要付款，並重新下訂完整之訂單即可，若已經付款完成，請依Q2的方式辦理取消後重新下訂即可。'
        },
        {
          title: 'Q4、超商取貨有其他超商可以選擇嗎?',
          ans: 'ANS：目前只有配合7-11門市取貨。'
        },
        {
          title: 'Q5、已選擇的7-11門市可以更改嗎?',
          ans: '<p>ANS：在訂單出貨前，您都可以透過以下兩種方式與我們聯繫更改取貨門市，但若已經出貨之訂單恕無法變更取貨門市。</p><p>聯絡方式1-信箱內的系統通知信中可點選訂單連結進入訂單明細，畫面右下角店家和顧客訂單通訊內可直接留言。</p><p>聯絡方式2-在官網任一畫面的右上角點選聯絡店主。</p>'
        },
        {
          title: 'Q6、超商純取貨時要本人嗎? 若是超商取貨付款呢?',
          ans: 'ANS：純取貨建議本人取貨，取貨時務必攜帶並出示與包裹姓名相同的身份證明文件(如身份證、健保卡、駕照)，而超商取貨付款一般不太會看證件，取貨時也比較不會強制要本人，但須明確知道取貨人名與金額。'
        },
        {
          title: 'Q7、超取包裹送達門市時會如何通知?',
          ans: 'ANS：除寄出當日系統會發送MAIL通知外，包裹到店後會發送取貨通知簡訊(但若您使用電信公司拒收商務廣告簡訊之服務或長時間未開機，可能導致無法接收通知簡訊)。'
        },
        {
          title: 'Q8、超取包裹忘記領取怎麼辦?',
          ans: '<p>ANS：若您未於貨到後7日內取貨，貨品將退回原寄件門市，並通知寄件者取回，小幫手取回後會使用站內訂單留言給您，需請您補匯運費$60後，我們將再次配送。</p><p>※ 若累積達三次超取未領取，也未通知小幫手重新寄出者，將設定入黑名單喔。</p>'
        },
        {
          title: 'Q9、超商代碼（經由綠界）怎麼操作呢? ',
          ans: '<p>ANS：詳細說明請參考綠界網站說明 <a class="text-info" href="https://www.ecpay.com.tw/Service/pay_qa_cvs">https://www.ecpay.com.tw/Service/pay_qa_cvs</a></p><p>※ 請留意超商代碼不等於超商條碼，兩者不同，我們使用的是"超商代碼"。</p>'
        },
        {
          title: 'Q10、請問有實體店面嗎?',
          ans: 'ANS：目前品牌沒有實體店面販售喔。'
        }
      ]

    }
  }

}
</script>
<style lang="scss">
$cqColor:#BBDEFB;
#questions{
  .container{

  max-width: 80% !important;
  // margin: auto;
  min-height: 90vh;
}
  .nav-item{
    background: rgba(23, 162, 184, 0.5);
    // color: purple !important;
  }
 .nav-pills .nav-link.active{
    background: #17a2b8;
    color: white;
  }
  // .nav-link{
  //   background: teal;
  // }
  .card-header{
    background:transparent;
    border: 0px solid red;
  }
  .card{
    border: 0px solid blue;
    background-color: transparent;
    .col{
      padding-left: 0;
      padding-right:0;
    }
  }
  .card-body{
    padding-top: 1rem;
  }
  a{
    color: black;
  }
  .cq{
    .card-header{
      background-color: transparent;
    }
    .tab-content{
      background: green;
    }
    .card-text{
      background: transparent;
    }
    .card{
      border: 0px solid blue;
      background-color: none;
    }

  }
  // header{
  //   button:nth-child(even){
  //     background: red !important;

  //   }
  // }
}
</style>
