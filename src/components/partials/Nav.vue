<template>
  <div class="navbar navbar-light navbar-inverse sticky-top navbar-expand-md" role="navigation">
    <div class="container">
      <button class="navbar-right navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span>☰</button>

      <div class="navbar-collapse collapse mt-3">
        <form class="d-flex mb-3">
          <input class="form-control me-2 mr-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <ul class="nav navbar-nav ml-auto" :key="$root.$data.isAuth">
          <li class="active nav-item text-hover-fill-goes-down"><a @click="$auth.push('home')" class="nav-link">Home</a></li>
          <li class="nav-item text-hover-fill-goes-down"><a href="https://www.instagram.com/willigis.sv/" class="nav-link"><i class="lni lni-instagram"></i> Instagram</a></li>
          <li v-if="$root.$data.isAuth" class="nav-item text-hover-fill-goes-down"><a  class="nav-link" @click="$auth.push('postReview')">Review</a></li>

          <li v-if="$root.$data.isAuth" class="nav-item dropdown text-hover-fill-goes-down">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Create
              </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" :to="{name:'post_create'}">Post</router-link>
              <a class="dropdown-item" @click="$auth.push('user_create')">User</a>
              <a class="dropdown-item" @click="$auth.push('author_create')">Author</a>
            </div>
          </li>

          <li v-if="!$root.$data.isAuth" class="nav-item text-hover-fill-goes-down"><a @click="login" class="nav-link">Log in</a></li>
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

.dropdown.text-hover-fill-goes-down{
  padding-left: 0;
  padding-right: 0;
  overflow: visible;
}

.dropdown-menu{
  background: #007bff;
}


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