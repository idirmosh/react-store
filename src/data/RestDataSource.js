import Axios from 'axios';
import { RestUrls } from './Urls';
export class RestDataSource {
    GetData = async(dataType, params) => 
        this.sendRequest('get', RestUrls[dataType], params);

    StoreData = (dataType, data) => 
        this.sendRequest('post', RestUrls[dataType], {}, data);
    
    sendRequest = (method, url, params, data) => 
        Axios.request({ method, url, params, data });
}