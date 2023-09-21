import axios from "axios";
import { Buffer } from 'buffer';
//
// // @ts-ignore
// window.Buffer = Buffer;

const PRODUCT_API_URL = "http://localhost:8083/products/";
const IMAGE_API_URL = "http://localhost:8083/images/";
const IMAGES_OF_PRODUCT_API_URL = "http://localhost:8083/images/products/";
export class ProductService {
    static getProducts(){
        return axios.get(PRODUCT_API_URL + "all");
    }
    static getProductById(id){
        return axios.get(PRODUCT_API_URL+id);
    }

    static getImageByProductId(id) {
        var url = IMAGES_OF_PRODUCT_API_URL + id

        return axios.get(url);
    }

    static getImageByURL(url){
        const promise = axios
            .get(url, {
                responseType: 'arraybuffer'
            })
        return promise.then(response => Buffer.from(response.data, 'binary').toString('base64'))
    }

}