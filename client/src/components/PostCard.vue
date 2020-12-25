<template>
  <section class="post-item">
    <header class="post-item-header">
      <p class="post-item-meta">
        <a v-if="post.creation_date!==undefined" class="post-item-category category-js">{{getDate(post.creation_date)}}</a>
      </p>
      <h2 v-if="post.title===undefined" class="post-item-title">Ladefehler</h2>
      <h2 v-else class="post-item-title">{{post.title}}</h2>

    </header>

    <div class="post-item-description">
      <p v-if="post.content===undefined">
        Es ist ein Fehler beim Laden des Inhalts aufgetreten :c
      </p>
      <p v-else>
        {{getShort(post.content)}}
      </p>

    </div>

    <footer class="post-item-footer">
      <a class="post-item-more" href="#">Read Full Post</a>
    </footer>
  </section>
</template>
<script>
var dateFormat = require('dateformat');
export default {
  props: ["post"],
  methods:{
    getDate(data){
     let date = new Date(Date.parse(data.replace(/[-]/g,'/')));
     let fdate = dateFormat(date,"d-mm-yyyy");
      return fdate;
    },
    getShort(data){
      return data.slice(0,300);
    }
  }
};
</script>
<style lang="scss" scoped>
.post-item {
  padding: 10px 20px;
  margin: 20px 0;
  border-left: 1px solid #EEE;
  &:hover {
    background-color: #ddd;
  }
}

.post-item-header {
  border-bottom: 2px solid #000;
}

.post-item-title {
  font-size: 2em;
  color: #222;
  margin-bottom: 0.2em;
  font-weight: bold;
}

.post-item-category {
  margin: 0 0.1em;
  padding: 0.3em 1em;
  color: #fff;
  background: #000;
  font-size: 80%;
  text-decoration: none;
}

.post-item-more {
  text-transform: uppercase;
  border: 1px solid #000;
  padding: 2px 8px;
  margin: 0;
}
</style>