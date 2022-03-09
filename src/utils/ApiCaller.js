import axios from "axios";
import * as Config from '../constants/Config';

export default function callApi(endpoint, _method = 'GET', body){
    return axios({ // dùng thư viện axios để thao tác vs API 
        method: _method, //dùng method mac dinh là GET 
        url: `${Config.API_URL}/${endpoint}`, 
        data: body
      }).catch((err) => {
          console.log('--Lỗi--',err);
      });
}

