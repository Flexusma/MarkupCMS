<template>
  <input :type="type" :placeholder="placeholder" class="form-control" v-model="val" @input="onChange">
</template>

<script>
export default {
  name: "AdaptiveInput",
  data() {
    return {
      val: undefined,
    }
  },
  props: {
    type:{
      type: String,
      default: "text"
    },
    placeholder: String,
  },
  methods:{
    onChange(){
      this.$emit('value-change',this.val);
    }
  }
}
</script>

<style scoped>

</style>