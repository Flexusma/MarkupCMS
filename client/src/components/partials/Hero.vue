<template>
  <div class="hero-bg-img">
    <div class="container-fluid big-logo-row">
      <div class="container">
        <div class="col">
          <div class="col-xs-12 big-logo-container text-left">
            <h1 class="big-logo">{{title}}</h1>
          </div>
          <div class="col-xs-12 big-logo-container text-left">
            <h3 class="big-logo">{{desc}}</h3>
          </div>
        </div>
      </div>
      <div v-if="button!==undefined||button2!==undefined" class="buttons">
        <button v-if="button!==undefined&&button_href!==undefined" @click="$auth.push(button_href)" class="hero-button ghost">{{button}}</button>
        <button v-else-if="button!==undefined" class="hero-button ghost">{{button}}</button>
        <button v-if="button2!==undefined&&button2_href!==undefined" @click="$auth.push(button2_href)" class="hero-button">{{button2}}</button>
        <button v-else-if="button2!==undefined" class="hero-button">{{button2}}</button>
      </div>
      </div>
  </div>
</template>

<script>
export default {
name: "Hero",
  props:["title","desc","button","button_href","button2","button2_href"]
}
</script>

<style lang="scss" scoped>
$navbar-height: 50px;
$big-logo-padding: 15px; // adjust these 2 values
$small-logo-padding: 2px; // of bottom padding to look nice
//$main-color: #ffd700;

$main-color: rgba(169, 142, 0, 0.6);

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #636EFD;
}

@media (min-width: 700px) {
  .hero {
    padding: 3rem;
  }
}

@media (min-width: 1200px) {
  .hero {
    padding: 6rem;
  }
}

.hero-inner {
  max-width: 900px;
  margin: auto;
}

.hero-inner, h3 p, {
  color: #fff;
}
h2{
  padding-bottom: 1em;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 600px) {
  .buttons {
    display: grid;
    /* Wide buttons */
    grid-template-columns: 1fr 1fr;
    /* Centered, narrow buttons */
    grid-template-columns: auto auto;
    gap: 1rem;
    justify-content: center;
  }
}

.hero-button {
  background: #fff;
  color: #444;
  border: 0;
  padding: 1rem 2rem;
  display: inline-block;
  margin-top: 1rem;
}

@media (min-width: 700px) {
  .hero-button {
    margin-top: 2rem;
  }
}

.hero-button.ghost {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
}
/* *********************************
           Toolbar Logo
  ********************************** */
.small-logo-container {
  padding-top: $navbar-height;
  height: $navbar-height;
  overflow: hidden;
  position: absolute;
}

.small-logo {
  color: white;
  font-size: 2.5em;
  padding-bottom: $small-logo-padding;

}

/* *********************************
           Big Logo
  ********************************** */
.big-logo-row {
  background: $main-color;
  vertical-align: center;

  .big-logo-container {
    padding-top: $navbar-height;
    color: white;
  }

  h1 {
    font-size: 3.5em;
    margin:0;
    padding:0 0 $big-logo-padding 0;
    text-align: left;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    text-transform: capitalize;
    letter-spacing: -0.014em;
    font-style: normal;

    @media (min-width: 400px) { font-size: 3em; }
    @media (min-width: 440px) { font-size: 4em; }
    @media (min-width: 500px) { font-size: 5em; }
    @media (min-width: 630px) { font-size: 6em;  }
    @media (min-width: 768px) { font-size: 7.5em; padding-bottom: $big-logo-padding * 2; }
    @media (min-width: 1200px) { font-size: 8em; }
  }

  h3 {
    font-size: 1em;
    margin:0;
    padding:0 0 $big-logo-padding 0;
    text-align: left;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    letter-spacing: -0.014em;
    font-style: normal;
    @media (min-width: 400px) { font-size: 1em; }
    @media (min-width: 440px) { font-size: 1.5em; }
    @media (min-width: 500px) { font-size: 2.5em; }
    @media (min-width: 630px) { font-size: 2.7em;  }
    @media (min-width: 768px) { font-size: 2.8em; padding-bottom: $big-logo-padding * 2; }
    @media (min-width: 1200px) { font-size: 3em; }
  }
}
.container-fluid{
  padding-bottom: 3em;
}
.hero-bg-img{
  background-image: url("~@/styles/imgs/hero-image.png");
  background-size: cover;
}

</style>