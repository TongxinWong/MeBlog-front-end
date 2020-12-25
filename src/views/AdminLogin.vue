<template>
  <div>
      <v-container>
        <v-col cols="12" sm="10" offset-sm="1" md="6" offset-md="3">
            <v-form v-model="valid" ref="form" class="mx-2 my-10 d-flex flex-column" lazy-validation>
                <v-text-field v-model="username" :rules="[v => !!v || '账号不能为空！']" label="请输入账号" required />
                <v-text-field class="my-6" :rules="[v => !!v || '密码不能为空！']" v-model="password" label="请输入密码" required />
                <v-col class="d-flex justify-center mt-4">
                    <v-btn :disabled="!valid" color="success" @click="validate" style="min-width:150px" :loading='loading'>
                        登录
                    </v-btn>
                </v-col>
            </v-form>
        </v-col>
      </v-container>
      <v-snackbar v-model="showError">登录出现错误：{{errorText}}</v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
        valid:true,
        username: '',
        password: '',
        loading:false,
        showError:false,
        errorText:'',
    }
  },
  methods:{
      validate () {
        if(this.$refs.form.validate()){
          this.$api.login(this.username, this.password).then(res=>{
            if(res.code == 200){
              this.$router.push('/admin')
            }
            else{
              this.errorText = res
              this.showError = true
            }
          })
        }
      },
  },
  created(){
  }
};
</script>
