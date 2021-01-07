<template>
  <section id="login">
  <section id="hero">
    <!--not authenticated-->
    <div v-if="!$auth.isAuthenticated()" class="login">
      <Hero title="Login" desc="Hey, do you have an account? Yes? Then let's log in!"/>
    </div>
    <!--already authenticated-->
      <div v-else >
        <Hero title="Successully logged in" desc="You can't log in again if that was what you were trying ;)" button2="Back Home" button2_href="home"/>
    </div>


  </section>
    <section id="form" class="">
  <div class="login-page">
    <transition name="fade">
      <div v-if="!$auth.isAuthenticated()" class="wallpaper-login"></div>
    </transition>
    <div class="wallpaper-loggedin"></div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div v-if="!$auth.isAuthenticated()" class="card login" v-bind:class="{ error: emptyFields }">
            <h1>Sign In</h1>
            <p v-bind:v-text="error" >{{error}}</p>
            <form v-on:submit.prevent="doLogin" class="form-group">
              <input v-model="emailLogin" type="text" class="form-control" placeholder="Username" required>
              <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password" required>
              <input type="submit" class="btn btn-primary" value="Absenden">
              <p><a href="#">Forgot your password?</a></p>
            </form>
          </div>

         <!-- <div v-else class="card register" v-bind:class="{ error: emptyFields }">
            <h1>Sign Up</h1>
            <form class="form-group">
              <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
              <input v-model="passwordReg" type="password" class="form-control" placeholder="Password" required>
              <input v-model="confirmReg" type="password" class="form-control" placeholder="Confirm Password" required>
              <input type="submit" class="btn btn-primary" @click="doRegister">
              <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
              </p>
            </form>
          </div> -->
        </div>
      </div>

    </div>
  </div>
    </section>
  </section>
</template>
<script>
import Hero from "@/components/partials/Hero";
export default {
  name: 'login',
  components: {
    Hero
  },
  data: function() {
    return {
        error:"",
        emailLogin: "",
        passwordLogin: "",
        emptyFields: false
      };
    },
        methods: {
      doLogin() {
        if (this.emailLogin === "" || this.passwordLogin === "") {
          this.emptyFields = true;
        } else {
          console.log(this.emailLogin+" "+this.passwordLogin);
          this.$auth.loginWithCred(this.emailLogin,this.passwordLogin).then((res) => {
            console.log(res);
            if(res.info.code!==200) this.error= res.info.message;
          });
        }
      },

  }
}
</script>
<style lang="scss" scoped>
p {
  line-height: 1rem;
}

.card {
  align-self: center;
  padding: 20px;
}

.form-group {
  input {
    margin-bottom: 20px;
  }
}


.login-page {
  align-items: center;
  display: flex;
  height: 100vh;

  .wallpaper-login {
    background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .wallpaper-loggedin {
    background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
    no-repeat center center;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  h1 {
    margin-bottom: 1.5rem;
  }
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}

</style>