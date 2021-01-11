<template>
  <div class="event-single" v-if="loaded">
    <Hero :title="post.title" :desc="getDate(post.creation_date)"/>
    <section class="event-content m-3">
      <Dash/>
      <div class="container">
        <h1 class="post-title">{{post.title}}</h1>
        <span class="post-content col-auto" v-html="post.content" >

        </span>
      </div>
    </section>
    <AuthorDisplay :id="post.author_id"/>
    <div class="m-auto align-items-center text-center row post-btns">
      <div v-if="hasIDELPermission()" class="m-3">
        <button type="button" class="btn btn-danger" @click="deletePost()">Delete</button>
      </div>
      <div v-if="hasIRELPermission()" class="m-3">
        <button v-if="!post.public" type="button" class="btn btn-success" @click="releasePost()">Veröffentlichen</button>
        <button v-else type="button" class="btn btn-warning" @click="hidePost()">Zurückziehen</button>
      </div>
    </div>
  </div>
  <div v-else class="text-center m-3">
    <Spinner/>
    <h1 v-if="!error_msg">Loading...</h1>
    <h1 v-else>{{error_msg}}</h1>
  </div>
</template>
<script>
// import EventService
import PostService from '@/services/PostService.js';
import Hero from "@/components/partials/Hero";
import Spinner from "@/components/partials/Spinner";
import Dash from "@/components/partials/Dash";
import Permission from "@/auth/permission";
import AuthorDisplay from "@/components/AuthorDisplay";
import {constant, lang} from "@/main";

var dateFormat = require('dateformat');
export default {
  name: 'EventSingle',
  components: {AuthorDisplay, Dash, Spinner, Hero},
  data() {
    // initialize the event object
    return {
      loaded: false,
      post: undefined,
      error_msg:undefined,
    }
  },
  created() {
    this.getEventData();
  },
  methods: {
    async deletePost(){
      let res = await PostService.deletePost(this.post.id);
      if(constant.debug)
      console.log(res)
      await this.getEventData();
    },
    async releasePost(){
      let res = await PostService.releasePost(this.post.id,true);
      if(constant.debug)
      console.log(res)
      await this.getEventData();
    },
    async hidePost(){
      let res = await PostService.releasePost(this.post.id,false);
      if(constant.debug)
      console.log(res)
      await this.getEventData();
    },
    hasIDELPermission(){
      let res = Permission.hasIPermission(Permission.DELETE_POST);
      if(constant.debug)
      console.log(res)
      return res;
    },
    hasIRELPermission(){
      let res = Permission.hasIPermission(Permission.RELEASE_POST);
      if(constant.debug)
      console.log(res)
      return res;
    },
    async getEventData() {
      PostService.getPostSingle(this.$route.params.id).then((res) => {
        if(constant.debug)
        console.log(res)
        if(res.info.code!==200){
          this.error_msg=lang.err_doesnt_exist
        }else {
          this.post = res.data;
          this.loaded = true;
        }
      });
    },
    getDate(data){
      if(constant.debug)
      console.log(data)
      let date = new Date(Date.parse(data));
      let fdate = dateFormat(date,"d.mm.yyyy");
      return fdate;
    },
  }
}
</script>
<style scoped lang="scss">
.post-content >>> img{
  max-width: 100% !important;
  height: auto;
  border-radius: 10px;
}
.post-content::v-deep img{
  max-width: 100% !important;
  height: auto;
  border-radius: 10px;
}
.post-content::v-deep h1,h2,h3,h4,h5,h6{
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: -0.034em;
}
.post-btns{
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.post-content{
  font-size: 1em;
  @media (min-width: 400px) { font-size: 1.05em;}
  @media (min-width: 440px) { font-size: 1.1em; }
  @media (min-width: 500px) { font-size: 1.15em; }
  @media (min-width: 630px) { font-size: 1.2em;  }
  @media (min-width: 768px) { font-size: 1.25em; }
  @media (min-width: 1200px) { font-size: 1.5em; }
}
body{
  background: #fff;
}
html{
  background: #fff;
}
.event-content{
  font-family: droid-serif, serif;
  font-weight: 400;
  font-style: normal;
}
.post-title{
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: -0.034em;
  font-size: 2.5em;
  @media (min-width: 400px) { font-size: 2.75em; }
  @media (min-width: 440px) { font-size: 3em; }
  @media (min-width: 500px) { font-size: 3.25em; }
  @media (min-width: 630px) { font-size: 3.5em;  }
  @media (min-width: 768px) { font-size: 3.75em; }
  @media (min-width: 1200px) { font-size: 4em; }
}
</style>