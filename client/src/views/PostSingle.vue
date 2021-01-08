<template>
  <div class="event-single" v-if="loaded">
    <Hero :title="post.title" :desc="getDate(post.creation_date)"/>
    <section class="event-content">
      <div class="container-fluid">
        <h1 class="">{{post.title}}</h1>
        <div class="post-content" v-html="post.content">

        </div>
      </div>
    </section>
  </div>
  <div v-else class="text-center">
    <Spinner/>
    <h1>Loading...</h1>
  </div>
</template>
<script>
// import EventService
import PostService from '@/services/PostService.js';
import Hero from "@/components/partials/Hero";
import Spinner from "@/components/partials/Spinner";
var dateFormat = require('dateformat');
export default {
  name: 'EventSingle',
  components: {Spinner, Hero},
  data() {
    // initialize the event object
    return {
      loaded: false,
      post: undefined,
    }
  },
  created() {
    this.getEventData();
  },
  methods: {
    async getEventData() {
      PostService.getPostSingle(this.$route.params.id).then((res) => {
          this.post=res;
          this.loaded=true;
        });
    },
    getDate(data){
      console.log(data)
      let date = new Date(Date.parse(data));
      let fdate = dateFormat(date,"d.mm.yyyy");
      return fdate;
    },
  }
}
</script>