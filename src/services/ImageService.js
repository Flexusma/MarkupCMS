import axios from "axios"
import {api, constant} from "@/main";
import AuthServiceInstance from "@/auth/authService";

export default {
    async getUserImages(id) {
        let res = await AuthServiceInstance.authAxiosNoRed(axios.get(api.api_base_url+api.api_image_path+api.image_user_path+id));
        if(constant.debug)
        console.log(res);
        return res.data;
    },
    async getSelfImages() {
        let res = await AuthServiceInstance.authAxiosNoRed(axios.get(api.api_base_url+api.api_image_path+api.image_user_path));
        if(constant.debug)
        console.log(res);
        return res.data;
    },
    async getImageFromID(id) {
        let res = await AuthServiceInstance.authAxiosNoRed(axios.get(api.api_base_url+api.api_image_path+"/id/"+id));
        return res.data;
    },

    async uploadImage(file){
        const formdata = new FormData();
        formdata.append("file",file);
        if(constant.debug)
        console.log(file)
        let res = await AuthServiceInstance.authAxiosNoRed(axios.post(api.api_base_url+api.api_image_path,formdata,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }}));
        return res;
    },

}