<template>
  <div class="posts">
    <h2 class="text-center m-3">Neue Beiträge</h2>
    <div class="container-fluid is-multiline">
      <div v-for="post in posts" :event="post" :key="post.id" class=" is-one-quarter row">
        <router-link :to="`/post/${post.id}`" class="col m-3">
          <PostCard :post="post" />
        </router-link>
      </div>
      <div v-if="posts.length===0">
        <p>No Posts available</p>
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
          this.posts=posts;
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
</style>