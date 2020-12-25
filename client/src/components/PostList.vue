<template>
  <div class="events">
    <h2 class="subtitle is-3">Check out our upcoming events</h2>
    <div class="columns is-multiline">
      <div v-for="post in posts" :event="post" :key="post.id" class="column is-one-quarter">
        <router-link :to="`/post/${post.id}`">
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
      post: {},
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