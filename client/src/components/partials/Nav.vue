<template>
  <div class="navbar navbar-light navbar-inverse sticky-top navbar-expand-md" role="navigation">
    <div class="container">
      <button class="navbar-right navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span>☰</button>
      <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Suchbegriff" aria-label="Suchbegriff" />
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Suchen</button>
      </form>
      <div class="navbar-collapse collapse" :key="$root.$data.isAuth">
        <ul class="nav navbar-nav ml-auto">
          <li class="active nav-item text-hover-fill-goes-down"><a @click="$auth.push('home')" class="nav-link">Home</a></li>
          <li class="nav-item text-hover-fill-goes-down"><a  class="nav-link" href="">Link</a></li>
          <li class="nav-item text-hover-fill-goes-down"><a  class="nav-link" href="">Link</a></li>
          <li v-if="!this.$root.$data.isAuth" class="nav-item text-hover-fill-goes-down"><a @click="login" class="nav-link">Log in</a></li>
          <li v-else class="nav-item text-hover-fill-goes-down"><a  @click="logout" class="nav-link">Log out</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Nav',
  methods: {
  // Log the user in
  login() {
    this.$auth.loginRedirect();
    this.$auth.checkAuthReq();
    return;
  },
    push(to){
        if(this.$route.name!==to){
            this.$router.push({name: to});
        }
    },
  // Log the user out
  logout() {
    this.$auth.logout({
      returnTo: window.location.origin
    });
  }
  }
}
</script>
<style lang="scss" scoped>
  nav {
    margin-top: 25px;
    margin-bottom: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }  
  }
  a{
    cursor: pointer;
  }
</style>