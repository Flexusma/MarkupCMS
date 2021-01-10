<template>
  <div class="post-release">
    <section class="hero is-dark">
      <div class="hero-body">
        <Hero title=" Posts" desc="Diese Posts sind noch nich veröffentlicht und müssen gelesen, und dann veröffentlicht werden"/>
      </div>
    </section>
    <PostList show-non-public="true"/>
  </div>
</template>

<script>
import Hero from "@/components/partials/Hero";
import PostList from "@/components/PostList";
export default {
name: "PostRelease",
  components: {PostList, Hero}
}
</script>

<style scoped>

</style>