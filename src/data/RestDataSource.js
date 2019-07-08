import Axios from 'axios';
import { RestUrls } from './Urls';
export class RestDataSource {
    GetData = (dataType) => this.sendRequest('get', RestUrls[dataType]);
    
    sendRequest = (method, url) => Axios.request({ method, url });
}