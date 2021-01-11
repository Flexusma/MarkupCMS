import axios from "axios"
import {api, constant} from "@/main";
import AuthServiceInstance from "@/auth/authService";

export default {
  async getPosts() {
    let res = await axios.get(api.api_base_url+api.api_post_path+api.post_list_path);
    if(constant.debug)
    console.log(res);
    return res.data.data;
  },
  async getPostSingle(postId) {
    let res = await axios.get(api.api_base_url+api.api_post_path+"/"+postId);
    if(constant.debug)
    console.log(res);
    return res.data;
  },

  async createPost(title,content){
      let res = await AuthServiceInstance.authAxiosNoRed(axios.post(api.api_base_url+api.api_post_path,{
        title: title,
        content: content
      }));
      return res;
  },

  async deletePost(postId){
    let res = await AuthServiceInstance.authAxiosNoRed(axios.delete(api.api_base_url+api.api_post_path+"/"+postId));
    return res;
  },
  async releasePost(postId,p){
    let res = await AuthServiceInstance.authAxiosNoRed(axios.patch(api.api_base_url+api.api_post_path+"/"+postId,{
      public:p
    }));
    return res;
  }
}