<template>
  <h1>Log in to your account</h1>
  <div class="form">
    <label>Name:</label>
    <input class="input-home" type="text" v-model="name">
    <label>password:</label>
    <input class="input-home" type="password" v-model="password">
    <button class="btn-login" @click="clickLogin">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent , ref} from 'vue';
// Components
import router from '@/router/index'

export default defineComponent({
  setup(){
    const name = ref('')
    const password = ref('')
    const clickLogin = () =>{
      if(name.value === 'radi'){
        if(password.value === '123'){
          router.push('/todo')
        }else{
          alert('Incorrect password')
        }
      }else{
        alert('user not found')
      }
    }
    return {name , password , clickLogin}
  }
});
</script>

<style>
.body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
h1{
  text-align: center;
}
.input-home{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px black solid;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 35px;
  width: 35%;
  border-radius: 20px;
  padding: 0 20px;
  font-size: 18px;
}
.form{
  width: 70%;
  margin: 0 auto;
}
.btn-login{
  background-color: crimson;
  border: 1px solid white;
  color:  white;
  width: 70px;
  height: 35px;
  border-radius: 20px;
}
</style>
