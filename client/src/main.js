import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';
import $ from "jquery";

const api_base_url="http://localhost:3000/api"
const api_token_check_url="/post";
let was_auth=false;

let api={
  api_base_url: api_base_url,
  api_token_check_url: api_token_check_url,
  was_auth: was_auth,
}
let constants={
  error_page_name: "error",
  login_page_name: "login",
}

let lang={
  err_could_not_verify_login:"Entschuldige, etwas ist bei der Überprüfung deines Login-Status schiefgelaufen... Vieleicht hilft es, die Seite neu zu Laden, oder dich neu einzuloggen."
}

let error_msg={
  could_not_verify_login: {
    code: 1001,
    message: lang.err_could_not_verify_login
  }
}
exports.api=api;
exports.constants=constants;
exports.lang=lang;
exports.error_msg=error_msg;

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//CUSTOM SCRIPTS


$(window).scroll(function() {
  var smallLogoHeight = 50;
  var bigLogoHeight = 100;


  var smallSpeed = (smallLogoHeight / bigLogoHeight);

  var ySmall = ($(window).scrollTop() * smallSpeed);

  var navOpacity = ySmall / smallLogoHeight;
  if  (navOpacity > 0.6) { navOpacity = 1; }
  if (navOpacity < 0 ) { navOpacity = 0; }
  //   var navBackColor = 'rgba(' + navbarColor + ',' + navOpacity + ')';
  //  $('.navbar').css({"background-color": navBackColor});


  var shadowOpacity = navOpacity * 0.4;
  if ( ySmall > 1) {
    $('.navbar').css({"box-shadow": "0 5px 7px rgba(0,0,0," + shadowOpacity + ")"});
  } else {
    $('.navbar').css({"box-shadow": "none"});
  }



});