<template>
  <div class="author-container container-fluid">
    <div class="author-display">
      <div class="author-box">
        <h3>{{disp_name}}</h3>
        <p>{{disp_desc}}</p>
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
      if(this.id===undefined){
        if(this.opt_name!=="")
          this.disp_name= this.opt_name;
        if(this.opt_desc!=="")
          this.disp_desc=this.opt_desc;
        return;
      }else{
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
  background: #fff;
}
</style>