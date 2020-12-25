<template>
  <section id="editor">
    <Hero title="New Post"/>
    <div class="container">
      <editor
          api-key="no-api-key"
          :init="{
         height: 800,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
      />
    </div>
  </section>
</template>

<script>
import Hero from "@/components/partials/Hero";
import Editor from "@tinymce/tinymce-vue";
export default {
name: "Post_create",
  components: {
    Hero,
    "editor": Editor
}
}
</script>

<style scoped>

</style>