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
         images_upload_url: api.api_base_url+api.api_image_path,
         images_upload_credentials: true,
         menubar: false,
         plugins: [
           'advlist autolink autosave lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic forecolor backcolor | \
           alignleft aligncenter alignright alignjustify | \
           restoredraft image | \
           bullist numlist outdent indent | removeformat | help \ '
       }"
      />
      <input type="button" class="mt-3" value="Absenden" @click="submit()">
      <p>{{title +" "+content}}</p>
      <h3>Error: {{error_msg}}</h3>
    </div>
  </section>
</template>

<script>
import Hero from "@/components/partials/Hero";
import Editor from "@tinymce/tinymce-vue";
import PostService from "@/services/PostService";
import {api} from '@/main';
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
    api: api,
  };
},

  methods: {
    async submit() {

      const res = await PostService.createPost(this.title, this.content);
      console.log(res)
      switch (res.data.info.code) {
        case 200: this.error_msg="UWU";
        break;
        case 612: this.error_msg=res.data.info.message;
        break;
        case 611: this.error_msg=res.data.info.message;
          break;

      }

    }
  }
}
</script>

<style scoped>

</style>