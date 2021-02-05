<template>
  <section id="author-create">
  <Hero title="Create Author Profile" :desc="hero_msg"/>
    <div v-if="loaded">
        <div v-if="author!==undefined">
          <AuthorDisplay :opt_name="author.name" :opt_desc="author.desc"/>
        </div>
        <div v-else>
          <AuthorDisplay :opt_name="inp_name" :opt_desc="inp_desc" :opt_img="picture_id"/>
          <Modal mid="author-create-modal" title="Success" body="Author was created successfully" :buttons="modal_buttons"/>
          <div class="card m-3">
            <form v-on:submit.prevent="submitAuthor" class="card-body">
              <p v-if="error_msg!==''" class="badge-danger">{{error_msg}}</p>
              <AdaptiveInput class="mt-3" type="text" placeholder="Name" @value-change="inp_name=$event"/>
              <AdaptiveInput class="mt-3" type="text" placeholder="Short description" @value-change="inp_desc=$event"/>
              <ImageGalleryPicker class="mt-3" title="Profilbild wählen (optional)" @value-change="picture_id=$event"/>
              <AdaptiveUserSelect v-if="hasAuthorOtherPerm" class="mt-3" @value-change="inp_usr_id=$event"/>
              <p>Selected user ID: {{inp_usr_id}}</p>
              <input class="m-0" type="submit" value="Speichern">
            </form>
          </div>
        </div>
    </div>
    <div v-else class="align-items-center p-3 text-center">
      <Spinner/>
      <h1>Loading...</h1>
    </div>
  </section>
</template>

<script>
import Hero from "@/components/partials/Hero";
import AuthorDisplay from "@/components/AuthorDisplay";
import AdaptiveInput from "@/components/partials/AdaptiveInput";
import AdaptiveUserSelect from "@/components/partials/AdaptiveUserSelect";
import AuthorService from "@/services/AuthorService";
import Modal from "@/components/Modal";
import $ from 'jquery';
import {constant, lang} from "@/main";
import AuthServiceInstance from "@/auth/authService";
import ImageGalleryPicker from "@/components/partials/ImageGalleryPicker";
import Permission from "@/auth/permission";
import Spinner from "@/components/partials/Spinner";

export default {
name: "Author_create",
  components: {Spinner, ImageGalleryPicker, Modal, AdaptiveUserSelect, AdaptiveInput, AuthorDisplay, Hero},
  methods:{
      async submitAuthor() {
        let res = await AuthorService.createAuthor(this.inp_name,this.inp_desc,this.inp_usr_id,this.picture_id);
        if(constant.debug)
        console.log(res)
        if(res.data.info.code===200){
          $('#author-create-modal').appendTo("body").modal();
        }else{
          this.error_msg=lang.err_author_create+JSON.stringify(res.data.error);
        }
      },
    hasAuthorOtherPerm(){
        return Permission.hasPermission(AuthServiceInstance.user.permission,Permission.CREATE_AUTHOR_OTHER);
    }
  },
  data(){
    AuthorService.getAuthorByUser(AuthServiceInstance.user.id).then((res) => {
      if(constant.debug)
      console.log(res);
      if(res.info.code===200){
        this.author=res.data;
        this.hero_msg="You already have an author profile."
      }
      this.loaded=true;
    });

    return{
      inp_name: "",
      inp_desc: "",
      inp_usr_id: AuthServiceInstance.user.id,
      picture_id: undefined,
      error_msg: "",
      hero_msg:"Go ahead...",
      loaded: false,
      author: undefined,
      modal_buttons:[
        {
          title: "Ok",
          styles: "btn-success",
          action: function (){
            AuthServiceInstance.push('home');
          }
        }
      ],
    }
  },
  watch:{
    picture_id: function() {if(constant.debug)console.log(this.picture_id)},
  }


}

</script>

<style scoped>

</style>