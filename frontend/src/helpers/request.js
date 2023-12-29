import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

const request = async (route, method = "POST" , data) => {
    console.log(route,method,data);
    try {
        const response = await axios.request({
            url:route,
            method: method,
            withCredentials:false,
            data:data,
            headers :{
                "Content-Type" : "application/json",
            }
        
        });
        return response.data;
    }catch(e){
        console.log("error in API Request",e);
    }
};

export {request}