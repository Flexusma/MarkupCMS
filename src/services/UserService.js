import axios from "axios"
import {api, constant} from "@/main";
import AuthServiceInstance from "@/auth/authService";

export default {
  async getPosts() {
    let res = await AuthServiceInstance.authAxiosNoRed(axios.get(api.api_base_url+api.api_post_path));
    if(constant.debug)
    console.log(res);
    return res.data.data;
  },
  async getPostSingle(postId) {
    let res = await axios.get(api.api_base_url+api.api_post_path+"/" + postId);
    return res.data;
  },

  async createPost(title,content){
      let res = await AuthServiceInstance.authAxiosNoRed(axios.post(api.api_base_url+api.api_post_path,{
        title: title,
        content: content
      }));
      return res;
  },

  async getUsersListSelector(query){
    let res = await AuthServiceInstance.authAxiosNoRed(axios.get(api.api_base_url+api.api_user_path+api.user_list_path,{
      params:{
        q: query
      }
    }));
    if(constant.debug)
    console.log(res);

    return res;
  }
}