(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reg"],{b7bb:function(t,i,n){"use strict";var e=n("e490"),s=n.n(e);s.a},b8b8:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{attrs:{id:"reg"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"base bg-danger"},[t.signUp?n("div",[n("div",{staticClass:"aim"},[n("h2",[t._v("成為會員")]),n("p",[t._v("讓我們一起購買周邊商品，去球場為她加油")]),n("button",{staticClass:"btn",on:{click:function(i){t.signUp=!t.signUp}}},[t._v("已成為會員")])]),n("b-form",{staticClass:"col-6 formArea",on:{submit:t.submitReg}},[n("b-form-group",{attrs:{label:"帳號","label-for":"input-accountReg","invalid-feedback":"帳號長度為4 - 20個字",state:t.state("input-accountReg")}},[n("b-form-input",{attrs:{id:"input-accountReg",type:"text",placeholder:"請輸入帳號",state:t.state("input-accountReg"),size:"sm"},model:{value:t.accountReg,callback:function(i){t.accountReg=i},expression:"accountReg"}})],1),n("b-form-group",{attrs:{label:"密碼","label-for":"input-passwordReg","invalid-feedback":"密碼長度為4 - 20個字",state:t.state("input-passwordReg")}},[n("b-form-input",{attrs:{id:"input-passwordReg",type:"password",placeholder:"請輸入密碼",state:t.state("input-passwordReg"),size:"sm"},model:{value:t.passwordReg,callback:function(i){t.passwordReg=i},expression:"passwordReg"}})],1),n("b-form-group",{attrs:{label:"再次輸入密碼","label-for":"input-againpw","invalid-feedback":"密碼需一致",state:t.state("input-againpw")}},[n("b-form-input",{attrs:{id:"input-againpw",type:"password",placeholder:"請再次輸入密碼",state:t.state("input-againpw"),size:"sm"},model:{value:t.againpw,callback:function(i){t.againpw=i},expression:"againpw"}})],1),n("b-form-group",{attrs:{label:"電子郵件地址","label-for":"input-email"}},[n("b-form-input",{attrs:{id:"input-email",type:"email",placeholder:"請輸入電子郵件地址",size:"sm",required:""},model:{value:t.email,callback:function(i){t.email=i},expression:"email"}})],1),n("b-button",{attrs:{type:"submit",variant:"ccc"}},[t._v("註冊")])],1)],1):n("div",[n("div",{staticClass:"aim in"},[n("h2",[t._v("歡迎回來")]),n("p",[t._v("看看新上架的商品")]),n("button",{staticClass:"btn",on:{click:function(i){t.signUp=!t.signUp}}},[t._v("還未成為會員嗎?")])]),n("b-form",{staticClass:"col-6 formArea in",on:{submit:t.submitSignin}},[n("b-form-group",{attrs:{label:"帳號","label-for":"input-accountSignin","invalid-feedback":"帳號長度為4 - 20個字",state:t.state("input-accountSignin")}},[n("b-form-input",{attrs:{id:"input-accountSignin",type:"text",placeholder:"請輸入帳號",state:t.state("input-accountSignin")},model:{value:t.accountSignin,callback:function(i){t.accountSignin=i},expression:"accountSignin"}})],1),n("b-form-group",{attrs:{label:"密碼","label-for":"input-passwordSignin","invalid-feedback":"密碼長度為4 - 20個字",state:t.state("input-passwordSignin")}},[n("b-form-input",{attrs:{id:"input-passwordSignin",type:"password",placeholder:"請輸入密碼",state:t.state("input-passwordSignin")},model:{value:t.passwordSignin,callback:function(i){t.passwordSignin=i},expression:"passwordSignin"}})],1),n("b-button",{attrs:{type:"submit"}},[t._v("登入")])],1)],1)])])])},s=[],a=(n("b0c0"),{name:"reg",data:function(){return{accountReg:"",passwordReg:"",accountSignin:"",passwordSignin:"",againpw:"",email:"",signUp:!0}},computed:{},methods:{state:function(t){return"input-accountReg"===t?0===this.accountReg.length?null:!(this.accountReg.length<4||this.accountReg.length>20):"input-passwordReg"===t?0===this.passwordReg.length?null:!(this.passwordReg.length<4||this.passwordReg.length>20):"input-againpw"===t?0===this.againpw.length?null:!(this.againpw.length<4||this.againpw.length>20)&&this.passwordReg===this.againpw:"input-accountSignin"===t?0===this.accountSignin.length?null:!(this.accountSignin.length<4||this.accountSignin.length>20):"input-passwordSignin"===t?0===this.passwordSignin.length?null:!(this.passwordSignin.length<4||this.passwordSignin.length>20):void 0},submitReg:function(t){var i=this;t.preventDefault(),this.accountReg.length<4||this.accountReg.length>20?this.$swal.fire({icon:"error",text:"帳號格式不符"}):(this.passwordReg.length<4||this.passwordReg.length>20)&&this.$swal.fire({icon:"error",text:"密碼格式不符"}),this.axios.post("https://amazingtty.herokuapp.com/users",{account:this.accountReg,password:this.passwordReg,email:this.email}).then((function(t){var n=t.data;n.success?(i.$swal.fire({icon:"success",text:"註冊成功"}),i.accountReg="",i.passwordReg="",i.againpw="",i.email=""):i.$swal.fire({icon:"error",text:n.message})})).catch((function(t){i.$swal.fire({icon:"error",text:t.response.data.message}),i.accountReg="",i.passwordReg="",i.againpw="",i.email=""}))},submitSignin:function(t){var i=this;t.preventDefault(),this.accountSignin.length<4||this.accountSignin.length>20?this.$swal.fire({icon:"error",text:"帳號格式不符"}):(this.passwordSignin.length<4||this.passwordSignin.length>20)&&this.$swal.fire({icon:"error",text:"密碼格式不符"}),this.axios.post("https://amazingtty.herokuapp.com/login",{account:this.accountSignin,password:this.passwordSignin}).then((function(t){var n=t.data;n.success?(i.$swal.fire({icon:"success",text:"登入成功"}),i.$store.commit("login",i.accountSignin),i.$store.commit("memberId",n.result[0]._id),i.$store.commit("memberName",n.result[0].name),i.$store.commit("memberEmail",n.result[0].email),i.$store.commit("memberAddress",n.result[0].address),i.$store.commit("memberCellphone",n.result[0].cellphone),i.accountSignin="",i.passwordSignin="","admintty"===n.result[0].account?i.$router.push("/manager"):i.$router.push("/products")):i.$swal.fire({icon:"error",text:n.message})})).catch((function(t){i.$swal.fire({icon:"error",text:t.response.data.message})}))}}}),o=a,r=(n("b7bb"),n("2877")),c=Object(r["a"])(o,e,s,!1,null,"798c5b27",null);i["default"]=c.exports},e490:function(t,i,n){}}]);
//# sourceMappingURL=reg.ba0c3121.js.map