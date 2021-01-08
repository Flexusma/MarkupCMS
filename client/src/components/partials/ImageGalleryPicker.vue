<template>
  <section id="image-gallery-picker">

    <div class="card" id="image-picker">
        <div class="card-content">
          <div class="card-header">
            <h3 class="card-title">{{title}}</h3>
          </div>
          <SmoothReflow>
          <div class="card-body">
            <div v-if="imageList===undefined" class="text-center">
              <input type="button" @click="loadContent()" class="m-0" value="Gallerie Laden">
            </div>
            <div class="scroll-container row" v-else>
              <div :key="image.id" class="display-container mt-3 mb-3 col-auto float-left align-middle" v-for="image in imageList">
                <div class="p-2 image-display rounded" @click="selectValue=image.id" :class="getColor(image.id)">
                  <img class="w-100 h-auto rounded" :src="image.url"/>
                  <p class="file-name">{{image.name}}</p>
                </div>
              </div>

            </div>
          </div>
          <div class="card-footer ">
            <div class="row w-100">
            <button type="button" class="btn btn-primary m-1"  @click="btn_upload()" >Upload</button>
            <button type="button" class="btn btn-success m-1"  @click="btn_ok()" >Done</button>
            </div>
          </div>
          </SmoothReflow>
        </div>
    </div>
    <div class="modal fade" id="image-uploader" tabindex="-1" role="dialog" aria-labelledby="displayModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-upload-Title">Upload Image</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="upload-container">
              <img v-if="loaded_image!==undefined" class="mw-100" :src="loaded_image"/>
              <form v-on:submit.prevent="submit()">
                <input @change="image_changed" type="file" class="form-control" accept="image/*">
                <input type="submit" value="Abschicken">
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal" @click="loadContent()" >Done</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageService from '@/services/ImageService';
import $ from 'jquery';
import '@vueform/multiselect/themes/default.scss'
import SmoothReflow from "@/components/partials/SmoothReflow";
export default {
name: "ImageGalleryPicker",
  components: {SmoothReflow},
  props:["title"],
  data() {
    return{
      imageList: undefined,
      image_to_upload: undefined,
      loaded_image:undefined,
      selectValue:0,
    }
  },
  watch:{
    image_to_upload: function (){
      console.log(this.image_to_upload);
    }
  },

  methods:{
    getColor(id){
      if(this.selectValue===id){
        return "bg-success";
      }
    },
    btn_ok(){
      this.$emit('value-change',this.selectValue);
      this.imageList=undefined;
      return;
    },
    btn_upload(){
      $('#image-uploader').modal();
    },
    image_changed(event){
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = (e) => {
          console.log("image loaded", e)
          this.loaded_image = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
      this.image_to_upload=event.target.files[0]
    },
    submit(){
      if(this.image_to_upload!==undefined&&this.image_to_upload) {

        ImageService.uploadImage(this.image_to_upload).then((res) => {
          console.log("Uploading Image: ", res);
        });
      }
      this.loadContent();
    },
    onSelectImage(image){
      console.log("Selected image: ",image);
    },
    async loadContent(){
      let res = await ImageService.getSelfImages();
      console.log("loading user images: ",res)
      let imglist = res.data;
      let newList = []
      if(res.info.code===200) {
        imglist.forEach((img) => {
          newList.push({
            id: img.id,
            src: img.url,
            alt: img.name
          });
        });
        console.log(imglist)
        this.imageList = imglist;
      }
    }

  }
}
</script>

<style scoped>
.image-display{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: #007bff;
}
.image-display:hover{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  background: #39ace7;
}
.scroll-container{
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 50vh;
}
.file-name{
  overflow-wrap: anywhere;
}
.display-container{
  max-width: 50%;
  max-height: 50%;
}
</style>