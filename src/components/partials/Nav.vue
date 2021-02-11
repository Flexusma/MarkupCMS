<template>
  <div class="navbar navbar-light navbar-inverse sticky-top navbar-expand-md" role="navigation">
    <div class="container-fluid">
      <button class="navbar-right navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span>☰</button>

      <div class="navbar-collapse collapse mt-3">
        <form class="d-flex mb-3">
          <input class="form-control me-2 mr-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <ul class="nav navbar-nav ml-auto" :key="$root.$data.isAuth">
          <li class="active nav-item text-hover-fill-goes-down"><router-link class="nav-link" :to="{name:'home'}">Home</router-link></li>
          <li class="nav-item text-hover-fill-goes-down"><a href="https://www.instagram.com/willigis.sv/" class="nav-link"><i class="lni lni-instagram"></i><p class="d-none d-lg-block float-right ml-1">Instagram</p></a></li>
          <li v-if="$root.$data.isAuth" class="nav-item text-hover-fill-goes-down"><router-link class="nav-link" :to="{name:'postReview'}">Review</router-link></li>

          <li v-if="$root.$data.isAuth" class="nav-item dropdown text-hover-fill-goes-down">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
              <router-link class="dropdown-item" :to="{name:'post_create'}">Create Post</router-link>
              <router-link class="dropdown-item" :to="{name:'user_create'}">Create User</router-link>
              <router-link class="dropdown-item" :to="{name:'author_create'}">Create Author</router-link>
            </div>
          </li>

          <li v-if="!$root.$data.isAuth" class="nav-item text-hover-fill-goes-down"><router-link class="nav-link" :to="{name:'login'}">Login</router-link></li>
          <li v-else class="nav-item dropdown text-hover-fill-goes-down">
            <p class="nav-link dropdown-toggle" id="navbarDropdownUserLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{$auth.user.username}}</p>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownUserLink">
              <a class="dropdown-item" @click="logout">Log-Out</a>
              <router-link class="dropdown-item" :to="{name:'settings'}">Settings</router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Nav',
  methods: {
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