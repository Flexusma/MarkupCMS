<template>
  <div class="footer-container p-3 w-100">
      <div class="col mt-5 mb-5">
        <div class="row text-center">
          <div class="col text-white my-auto text-auto"><p class="">&copy; 2021 Schülerzeitung Willigis</p></div>
          <div class="col text-white"><router-link :to="{name: 'home'}" class="h-100"><input value="HOME" type="button"></router-link></div>
          <!--<router-link :to="{name: 'dasc'}"><a class="text-white">DATENSCHUTZ</a></router-link>
          <router-link :to="{name: 'impr'}"><a class="text-white">IMPRESSUM</a></router-link>-->
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>
.footer-container{
  background: #23272a;
  width: 100%;
}
</style>