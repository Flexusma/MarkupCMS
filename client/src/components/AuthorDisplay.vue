<template>
  <div class="author-container m-0 p-3 container-fluid">
    <div class="">
      <div class="author-display p-3 align-items-center row">
        <div class="h-auto col-auto p-1 author-img-cont rounded-circle">
          <img class="author-img rounded-circle mw-100" src="https://lunamedia.de/wp-content/uploads/2016/03/blank-profile-picture-973460_960_720.png" />
        </div>
        <div class="author-box col">

            <h3 v-if="opt_name!==''">{{opt_name}}</h3>
            <h3 v-else>{{disp_name}}</h3>
            <p v-if="opt_desc!==''" class="mt-3 mb-0">{{opt_desc}}</p>
            <p v-else>{{disp_desc}}</p>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import AuthorService from "@/services/AuthorService";

export default {
name: "AuthorDisplay",
  props:["id", "opt_name","opt_desc"],
  data(){
  this.getDetails();
    return{
      disp_name:"Name",
      disp_desc:"Description"
    }
  },
  watch:{
    opt_name: function() {this.getDetails();},
    opt_desc: function() {this.getDetails();},
  },
  methods:{

    async getDetails(){
      console.log(this.id,this.opt_name,this.opt_desc)
      if(this.id!==undefined){
        let res = AuthorService.getAuthorByID(this.id);
        let author = res.data.data;
        if(author!==undefined&&!(author instanceof Error)) {
          this.disp_name = author.name;
          this.disp_desc = author.desc;
          return;
        }
      }
      this.disp_name="Name";
      this.disp_desc="Description"
    },


  }
}
</script>

<style scoped>

.author-container{
  background: #A50DFF;
}
.author-img{
  max-height: 100px;
}
.author-img-cont{
  background: #fff;
}
input[type=submit]{
  margin: 0;
}
.author-container{
  color: #fff;
}
</style>