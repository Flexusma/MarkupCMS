<template>
  <section id="editor">
    <Hero title="New Post"/>
    <div class="container">

      <input type="text" class="form-control mt-3 mb-3 " v-model="title" placeholder="Titel eingeben">

      <editor v-model="content"
          api-key="no-api-key"
          id="tinyedit"
          :init="{
         height: 800,
         menubar: false,
         plugins: [
           'advlist autolink autosave lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic forecolor backcolor | \
           alignleft aligncenter alignright alignjustify | \
           restoredraft | \
           bullist numlist outdent indent | removeformat | help \ '
       }"
      />
      <input type="button" class="mt-3" value="Absenden" @click="submit()">
      <p>{{title +" "+content}}</p>
    </div>
  </section>
</template>

<script>
import Hero from "@/components/partials/Hero";
import Editor from "@tinymce/tinymce-vue";
import PostService from "@/services/PostService";
export default {
name: "Post_create",
  components: {
    Hero,
    "editor": Editor
},
  data:function() {
  return {
    content:"",
    title:"",
    error_msg: "",
  };
},

  methods: {
    async submit() {

      const res = await PostService.createPost(this.title, this.content);
      switch (res.data.info.code) {
        case 200:

      }

    }
  }
}
</script>

<style scoped>

</style>