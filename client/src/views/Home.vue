<template>
<div class="home">
  <section class="hero is-dark">
    <div class="hero-body">
      <Hero title="Welcome to MCMS" desc="This is a random description text"/>
      <div class="button-block">
        <button v-if="!$data.isAuth" @click="login" class="button is-xl is-dark">Sign Up to Browse Events</button>
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

  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    width: 100%;
    .button {
      margin-right: 50px;
      padding-left: 50px;
      padding-right: 50px;
    }
    .welcome {
      width: 400px;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .is-xl {
    font-size: 1.7rem;
  }
  .hero-body{
    padding-bottom: 3em;
  }

</style>