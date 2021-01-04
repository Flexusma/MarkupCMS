<template>
  <section id="author-create">
  <Hero title="Create Author Profile" desc="..."/>
  <AuthorDisplay :opt_name="inp_name" :opt_desc="inp_desc"/>
    <div class="card">
      <form class="card-body">
        <AdaptiveInput type="text" placeholder="Name" @value-change="inp_name=$event"/>
        <AdaptiveInput type="text" placeholder="Short description" @value-change="inp_desc=$event"/>
        <input type="button" @click="submit">
      </form>
    </div>
  </section>
</template>

<script>
import Hero from "@/components/partials/Hero";
import AuthorDisplay from "@/components/AuthorDisplay";
import AdaptiveInput from "@/components/partials/AdaptiveInput";
export default {
name: "Author_create",
  components: {AdaptiveInput, AuthorDisplay, Hero},
  data:function() {
    return {
        inp_name: "",
        inp_desc: "",
      };
  },
  methods:{
      submit() {
        return
      }
  }
}
</script>

<style scoped>

</style>