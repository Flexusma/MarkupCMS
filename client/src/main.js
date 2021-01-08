import {createApp} from 'vue'
import App from '@/App'
import router from './router/index'
import './../node_modules/bootstrap/scss/bootstrap.scss';
import './../node_modules/bootstrap/dist/js/bootstrap';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './styles/hover_lib/text_hover.scss';
import $ from "jquery";
import {initAuthService} from "@/auth/authService";
import axios from 'axios';
import VueAxios from 'vue-axios';

import  'tinymce/tinymce';

// Default icons are required for TinyMCE 5.3 or above
import 'tinymce/icons/default';

// A theme is also required
import 'tinymce/themes/silver';

import VueSelectImage from 'vue-select-image'
// add stylesheet
import('vue-select-image/dist/vue-select-image.css');


axios.defaults.withCredentials = true;


/*

CONSTANT VALUES AND OTHER SETTINGS

 */
const api_base_url="http://localhost:3000/api"
const api_token_check_url="/post";

export let api={
  api_base_url: api_base_url,
  api_token_check_url: api_token_check_url,
  //paths
  api_session_path: "/session",
  api_session_check_path: "/session/check",
  api_post_path: "/post",
  api_image_path: "/image",
  api_author_path: "/author",
  author_id_path: "/id/",
  author_user_path: "/user/",
  api_user_path:"/user",
  user_list_path: "/list",
  image_user_path: "/user/",

}
export let constant={
  error_page_name: "error",
  login_page_name: "login",
  home_page_name: "home",
}

export let lang={
  err_could_not_verify_login:"Entschuldige, etwas ist bei der Überprüfung deines Login-Status schiefgelaufen... Vieleicht hilft es, die Seite neu zu Laden, oder dich neu einzuloggen.",
  err_author_create:"Es ist ein Fehler bei der Erstellung deines Autors aufgerteten. Bitte überprüfe deine Eingaben. Mehr Informationen: \n",
}

export let error_msg={
  could_not_verify_login: {
    code: 1001,
    message: lang.err_could_not_verify_login
  }
}


/*

END OF SETTINGS



initAuthService(Vue);

Vue.config.productionTip = true

export const vue = new Vue({
  router  ,
  render: h => h(App),
  data:{
    isAuth:  undefined,
  }
}).$mount('#app')
 */


export const vue = createApp(App)
    .use(VueAxios,axios)
    .use(router)
    .use(VueSelectImage)
initAuthService(vue);
export const app = vue.mount('#app');

console.log("Application init complete:\n\n ",vue, app)




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