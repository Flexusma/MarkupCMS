<template>
  <div class="modal fade" v-bind:id="mid" tabindex="-1" role="dialog" aria-labelledby="displayModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">{{ title }}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div v-html="body" class="modal-body">

        </div>
        <div v-if="buttons!==undefined" class="modal-footer">
          <button v-for="button in buttons" :key="button.title" type="button" v-bind:class="button.styles" class="btn" data-dismiss="modal" @click="button.action()" >Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Modal",
  props:["mid","title","body","buttons"]
}
</script>

<style scoped>

</style>