import axios from "axios"
import {api} from "@/main";
import AuthServiceInstance from "@/auth/authService";

export default {
  async getPosts() {
    let res = await axios.get(api.api_base_url+api.api_post_path);
    console.log(res);
    return res.data.data;
  },
  async getPostSingle(postId) {
    let res = await axios.get(api.api_base_url+api.api_post_path+"/"+postId);
    console.log(res);
    return res.data.data;
  },

  async createPost(title,content){
      let res = await AuthServiceInstance.authAxiosNoRed(axios.post(api.api_base_url+api.api_post_path,{
        title: title,
        content: content
      }));
      return res;
  }
}