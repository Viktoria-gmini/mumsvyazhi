
import {ProductService} from "../../services/ProductService";
import React, { useState } from "react";
import { useEffect } from "react";


function Card(props) {
    const [Base64, setBase64] = useState('');
    const [error, setError] = useState(false);
    const [state, setState] = useState('');
    useEffect(() => {
        setState('loading');
        let newpreviewImage;
        Object.entries(props.product).map(entry => {
            const [key, value] = entry;
            if(key==='previewImageId'){
                newpreviewImage=value
            }
        })
        const url = "http://localhost:8083/images/"+newpreviewImage
        function getImage(url){
            let image = new Image();
            ProductService.getImageByURL(url).then((res) => {
                image.src = 'data:image/jpg;base64,'+res;
                setState('success');
                setBase64(image.src);
            })
                .catch((err) => {
                    console.error('Error:', err);
                    setState('error');
                    setError(err);
                });
            return image
        }
        let previewImage = getImage(url)
    }, []);
    if (state === 'error')
        return (
            <h1>
                {error.toString()}
            </h1>
        );

    return (
            <nav className="product">
                {state === 'loading' ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className="card">
                        <div className="card-img">
                            <img className= "img" src={Base64}/>
                        </div>
                        <div className="card-text">
                            <p className="card-name">{props.product.title}</p>
                            <p>{props.product.price} рублей</p>
                        </div>
                    </div>
                )}
            </nav>

    );
}
export default Card;