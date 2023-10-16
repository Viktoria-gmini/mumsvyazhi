import axios from "axios";
import { Buffer } from 'buffer';
//
// // @ts-ignore
// window.Buffer = Buffer;

const PRODUCT_API_URL = "https://mumsik.onrender.com/products/";

const IMAGE_URL = "https://mumsik.onrender.com/images/";
export class ProductService {
    static getProducts(){
        return axios.get(PRODUCT_API_URL + "all");
    }
    static getProductById(id){
        return axios.get(PRODUCT_API_URL+id);
    }

    static getImageById(id) {
        var url = IMAGE_URL + id

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