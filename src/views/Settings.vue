<template>
  <Hero title="Settings" />
  <div class="container-fluid">
    <div class="pb-pick">
      <h2 class="">Bilder verwalten:</h2>
      <ImageGalleryPicker title="Gallerie" />
      
    </div>
  </div>
</template>

<script>
import Hero from "@/components/partials/Hero";
import ImageGalleryPicker from "@/components/partials/ImageGalleryPicker";
export default {
name: "Settings",
  components: {ImageGalleryPicker, Hero},
  data:function() {
  return {

    };
}
}
</script>

<style scoped>

</style>