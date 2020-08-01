<template>
    <div id="memberInf">
        <section>
          <h2 class="text">會員資料修改</h2>
          <b-form class="d-flex flex-column" @submit="onSubmit">
            <b-form-group id="memberInf1" label-cols-sm="3" label-cols-lg="2" label="中文全名 :" label-for="input1" label-align-sm="right" class="mt-4">
              <b-form-input id="input1" class="col-sm-11" v-model="form.name"></b-form-input>
            </b-form-group>
            <b-form-group id="memberInf2" label="電子信箱 :" abel-for="input2" label-cols-sm="3" label-cols-lg="2" label-align-sm="right" class="mt-4">
              <b-form-input id="input2" class="col-sm-11" v-model="email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="memberInf3" label="手機號碼 :" abel-for="input3" label-cols-sm="3" label-cols-lg="2" label-align-sm="right" class="mt-4">
              <b-form-input id="input3" class="col-sm-11" v-model="form.cellphone">
              </b-form-input>
            </b-form-group>
            <b-form-group id="memberInf4" label="聯絡地址 :" abel-for="input4" label-cols-sm="3" label-cols-lg="2" label-align-sm="right" class="mt-4">
              <b-form-input id="input4" class="col-sm-11" v-model="form.address">
              </b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-center my-4" >
              <b-button type="submit" class="col-2 mx-2">送出</b-button>
              <!-- <b-button type="submit" class="col-2 mx-2">清除</b-button> -->
            </div>
          </b-form>
        </section>
    </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: '',
        // email: '',
        cellphone: '',
        address: ''
      }
    }
  },
  computed: {
    id () {
      return this.$store.getters.id
    },
    account () {
      return this.$store.getters.account
    },
    email: {
      get () {
        return this.$store.getters.email
      },
      set (value) {
        this.$store.commit('memberEmail', value)
      }
    },
    // email () {
    //   return this.$store.getters.email
    // },
    name () {
      return this.$store.getters.name
    },
    address () {
      return this.$store.getters.address
    },
    cellphone () {
      return this.$store.getters.cellphone
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.$store.commit('memberEmail', this.email)

      console.log(this.form)
      console.log(this.id)
      this.axios.patch(process.env.VUE_APP_APIURL + '/memberData/' + this.id, { email: this.email, name: this.form.name, address: this.form.address, cellphone: this.form.cellphone })
        .then(response => {
          const data = response.data
          console.log(data)
          if (data.success) {
            this.$swal.fire({
              icon: 'success',
              text: '資料輸入成功'
            })
            // this.$store.commit('memberId', data.result.id)
            this.$store.commit('memberEmail', data.result.email)
            this.$store.commit('memberName', data.result.name)
            this.$store.commit('memberAddress', data.result.address)
            this.$store.commit('memberCellphone', data.result.cellphone)
          } else {
            this.$swal.fire({
              icon: 'error',
              text: data.message
            })
          }
        })
        .catch(error => {
          this.$swal.fire({
            icon: 'error',
            text: error.response.data.message
          })
        })
    }
  },
  mounted () {
    this.form.name = this.name
    // this.form.email = this.email
    this.form.cellphone = this.cellphone
    this.form.address = this.address
  }
}
</script>

<style lang="scss">

</style>
