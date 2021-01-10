<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <Hero title="WSZ" desc="Willkommen auf der Homepage der Schülerzeitung am Willigis"/>
      <div class="button-block">
        <button v-if="!$root.$data.isAuth" @click="login" class="button is-xl is-dark">Sign Up to Browse Events</button>
        <h3 v-else class="is-size-3 has-background-dark welcome">Welcome, {{ $auth.user.username }}!</h3>
      </div>
    </div>
  </section>
  <PostList />
</div>
</template>
<script>
import PostList from '../components/PostList';
import Hero from "@/components/partials/Hero";
export default {
  name: 'home',
  components: {
    Hero,
    PostList
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginRedirect();
    }
  }
}
</script>
<style lang="scss" scoped>

  .hero {    
    text-align: center;
    background: #FFD700;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

  }
  .button-block{
    margin-top: 3em;
  }

  .is-xl {
    font-size: 1.7rem;
  }
  .hero-body{
    padding-bottom: 3em;
  }

</style>