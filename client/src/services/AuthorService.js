import axios from "axios"
import {api} from "@/main";
import AuthServiceInstance from "@/auth/authService";

export default {
  async getAuthors() {
    //Maybe TODO
  },
  async getAuthorByID(authorId) {
    let res = await axios.get(api.api_base_url+api.api_author_path+api.author_id_path+authorId);
    return res.data;
  },
  async getAuthorByUser(userId) {
    let res = await axios.get(api.api_base_url+api.api_author_path+api.author_user_path+userId);
    return res.data;
  },

  async createAuthor(name,description,id){
      let res = await AuthServiceInstance.authAxiosNoRed(axios.post(api.api_base_url+api.api_author_path,{
        name: name,
        description: description,
        create_user_id: id
      }));
      return res;
  }
}