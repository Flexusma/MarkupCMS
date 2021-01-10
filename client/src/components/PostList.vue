<template>
  <div class="posts">
    <h2 class="text-center list-title m-3">Neue Beiträge</h2>
    <div class="container-fluid is-multiline">
      <div class=" is-one-quarter row">
        <router-link v-for="post in posts" :event="post" :key="post.id" :to="`/post/${post.id}`" class="col m-3 one-container">
          <PostCard :post="post" />
        </router-link>
      </div>
      <div v-if="posts.length===0" class="text-center m-5">
        <h1>Keine Beiträge verfügbar</h1>
      </div>
    </div>
  </div>
</template>
<script>
import PostCard from "@/components/PostCard";
import PostService from '@/services/PostService.js';
export default {
  name: "PostList",
  components: {
    PostCard
  },
  props:["showNonPublic"],
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.getPostsData(); // call getEventData() when the instance is created
  },
  methods: {
    async getPostsData() {
      // Use the eventService to call the getEvents() method
      PostService.getPosts()
      .then(
        (posts => {
          let showPosts = [];
          if(this.showNonPublic)
            showPosts=posts;
          else{
            posts.forEach((post)=>{
              if(post.public) showPosts.push(post);
            });
          }
          this.posts=showPosts;
        }).bind(this)
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.events {
  margin-top: 100px;
  text-align: center;
}

a:hover{
  text-decoration: none;
}
.list-title{
  text-transform: uppercase;
  font-family: Roboto,sans-serif;
  font-weight:700;
}
.one-container{
  min-width: 300px;
}
</style>