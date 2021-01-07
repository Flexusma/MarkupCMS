<template>
  <Multiselect
      v-model="value"
      placeholder="Choose a user"
      :filterResults="true"
      :minChars="1"
      :resolveOnLoad="false"
      :delay="0"
      :loading="loading"
      :searchable="true"
      :options="async function(query) {
      return await getQuery(query) // check JS block for implementation
    }"
  />
</template>

<script>
import Multiselect from '@vueform/multiselect';
import UserService from "@/services/UserService";
export default {
name: "AdaptiveUserSelect",
  components:{
  Multiselect,
  },
  data(){
    return{
      value: null,
      loading: false,
    }
  },
  methods:{
    async getQuery(query) {
      this.loading=true;
      let res = await UserService.getUsersListSelector(query);
      let options = []
      if(res.data.data!==[])
      res.data.data.forEach(function (user){
        options.push({
          value:user.id,
          label:user.username,
        })
      });
      this.loading=false;
      return options;
    }
  },
  watch:{
    value: function (newVal){
      this.$emit('value-change',newVal);
    }
  }

}
</script>

<style scoped>
@import "~@vueform/multiselect/themes/default.scss";
</style>