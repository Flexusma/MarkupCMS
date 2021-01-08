<!--<section class="card">
  <div class="card-header">

    <h3 v-if="post.title===undefined" class="card-title">Ladefehler</h3>
    <h3 v-else class="card-title">{{post.title}}</h3>

  </div>

  <div class="post-item-description">
    <p v-if="post.content===undefined">
      Es ist ein Fehler beim Laden des Inhalts aufgetreten :c
    </p>
    <span v-else v-html="strip(post.content)">
    </span>
  </div>

  <footer class="post-item-footer">
    <a class="post-item-more" href="#">Read Full Post</a>
  </footer>
</section>-->
<template>
  <div class="post-card">
    <div class="post-img">
      <div class="date rounded-pill p-2 text-center align-items-center">
        <p class="day m-0">{{getDate(post.creation_date)}}</p>
      </div>
      <img v-if="getFirstImage(post.content)!==undefined" :src="getFirstImage(post.content)"/>
    </div>
    <div class="post-content">
      <div class="category"></div>
      <h1 class="title">{{post.title}}</h1>
      <h2 class="sub_title">{{strip(post.content)}}</h2>
      <p class="description">India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia.</p>
      <div class="post-meta"><span class="timestamp"><i class="fa fa-clock-o"></i> Weiter lesen... </span></div>
    </div>
  </div>
</template>
<script>
var dateFormat = require('dateformat');
export default {
  components: {},
  props: ["post"],
  methods:{
    strip(html){
      let doc = new DOMParser().parseFromString(html, 'text/html');
      let txt = doc.body.textContent || "";
      return txt.substring(0,300);
    },
    getFirstImage(content){
      var ele = document.createElement("div");
      ele.innerHTML = content;
      var image = ele.querySelector("img");
      if(image!==null) return image.src;
    },
    getDate(data){
      console.log(data)
     let date = new Date(Date.parse(data));
     let fdate = dateFormat(date,"d.mm.yyyy");
      return fdate;
    },
    getShort(data){
      return data.slice(0,300);
    }
  }
};
</script>
<style lang="scss" scoped>
*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat';
  font-size: 14px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.column {
  width: 50%;
  float: left;
  padding: 0 25px;
}

.title {
  color: #666666;
  text-transform: uppercase;
}

.post-card {
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  background: #FFD700;
  min-width: 100%;
}

.post-card:hover {
  box-shadow: 5px 4px 10px 5px rgba(0, 0, 0, 0.15);
  background: #FFD700;
}

.post-img{
  height: 100px;
  overflow: hidden;
}

.post-card img {
  display: block;
  width: 135%;
}

.date {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  background: #007bff;
  color: #FFFFFF;
  text-align: center;
}

.post-content {
  bottom: 0;
  background: #FFFFFF;
  width: 100%;
  padding: 30px;
}

.title {
  margin: 0;
  padding: 0 0 10px;
  color: #333333;
  font-size: 26px;
  font-weight: 700;
}

.sub_title {
  margin: 0;
  padding: 0 0 20px;
  color: #007bff;
  font-size: 20px;
  font-weight: 400;
}

.description {
  color: #666666;
  font-size: 14px;
  line-height: 1.8em;
  display: none;
}

.up-title {
  margin: 0 0 15px;
  color: #666666;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}

.hover .post-content .description {
  display: block !important;
  height: auto !important;
  opacity: 1 !important;
}

.post-meta {
  margin: 30px 0 0;
  color: #999999;
}

.timestamp {
  margin: 0 16px 0 0;
}

.post-meta a {
  color: #999999;
  text-decoration: none;
}

</style>