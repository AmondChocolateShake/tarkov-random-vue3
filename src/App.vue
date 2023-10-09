<template>
    <MainContainer/>
</template>



<script>
import MainContainer from './components/MainContainer.vue'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  components: {
    MainContainer
  }
}
</script>

<style>
body{
  background-color: black;
  margin: 0;
  width: 100vw;
  height: 100vh;
  min-width: 500px;
  min-height: 800px;
}
#app{
  display: flex;
  flex-direction: column;
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
