<template>
  <div class="author-container m-0 p-3 container-fluid">
    <div class="">
      <div class="author-display p-3 align-items-center row">
        <h1 class="author-title">Autor</h1>
        <div class="h-auto col-auto p-1 author-img-cont rounded-circle">
          <img class="author-img rounded-circle" :src="picture_url" />
        </div>
        <div class="author-box col text-left">

            <h3 v-if="opt_name&&opt_name!==''">{{opt_name}}</h3>
            <h3 v-else>{{disp_name}}</h3>
            <p v-if="opt_desc&&opt_desc!==''" class="mt-3 mb-0">{{opt_desc}}</p>
            <p v-else>{{disp_desc}}</p>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import AuthorService from "@/services/AuthorService";
import ImageService from "@/services/ImageService";

export default {
name: "AuthorDisplay",
  props:["id", "opt_name","opt_desc", "opt_img"],
  data(){
  this.getDetails();
  if(this.opt_img!==undefined) this.getPicture(this.opt_img);
    return{
      disp_name:"Name",
      disp_desc:"Description",
      picture_url:"https://lunamedia.de/wp-content/uploads/2016/03/blank-profile-picture-973460_960_720.png"
    }
  },
  watch:{
    opt_name: function() {this.getDetails();},
    opt_desc: function() {this.getDetails();},
    opt_img: function () {this.getPicture(this.opt_img)}
  },
  methods:{

    async getDetails(){
      console.log(this.id,this.opt_name,this.opt_desc)
      if(this.id!==undefined){
        let res = await AuthorService.getAuthorByID(this.id);
        let author = res.data;
        console.log(res)
        if(author!==undefined&&!(author instanceof Error)) {
          this.disp_name = author.name;
          this.disp_desc = author.desc;
          if(author.pp_id!==undefined&&author.pp_id!==null)
            await this.getPicture(author.pp_id);
          return;
        }
      }
      this.disp_name="Name";
      this.disp_desc="Description"
    },
    async getPicture(id){
      let res = await ImageService.getImageFromID(id);
      console.log(res);
      this.picture_url=res.data.url;
    }


  }
}
</script>

<style scoped lang="scss">

.author-container{
  background: #A50DFF;
}
.author-img{
  max-height: 150px;
  max-width: 150px;
  min-width: 80px;
  min-height: 80px;
  width: 15vw;
  height: 15vw;
  object-fit: cover;
}
.author-img-cont{
  background: white;
}
input[type=submit]{
  margin: 0;
}
.author-container{
  color: #fff;
}
.author-title{
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 1em;
  @media (min-width: 400px) { font-size: 1.05em;}
  @media (min-width: 440px) { font-size: 1.1em; }
  @media (min-width: 500px) { font-size: 1.15em; }
  @media (min-width: 630px) { font-size: 1.2em;  }
  @media (min-width: 768px) { font-size: 1.25em; }
  @media (min-width: 1200px) { font-size: 1.5em; }
}
</style>