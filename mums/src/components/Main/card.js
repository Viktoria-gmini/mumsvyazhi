import React, {useEffect, useState} from "react";
import {ProductService} from "../../services/ProductService";

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
        const url = ProductService.GET_IMAGES()+newpreviewImage

        // function getImage(url){
        //     let image = new Image();
        //     ProductService.getImageByURL(url).then((res) => {
        //         image.src = 'data:image/jpg;base64,'+res;
        //         setState('success');
        //         setBase64(image.src);
        //     })
        //         .catch((err) => {
        //             console.error('Error:', err);
        //             setState('error');
        //             setError(err);
        //         });
        //     return image
        // }
        // getImage(url)
        console.log(url)
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                let image = new Image()
                console.log(url)
                console.log(blob)
                image.src = URL.createObjectURL(blob);
                setState('success');
                setBase64(image.src);
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
    }, []);
    if (state === 'error')
        return (
            <h1>
                {error.toString()}
            </h1>
        );

    return (
            <nav className="product justify-content-center text-center">
                {state === 'loading' ? (
                    <h1>Loading...</h1>
                ) : (

                    <div className="card">
                        <div className="card-img">
                            <img className= "img" src={Base64} crossOrigin="anonymous" alt={"product"}/>
                        </div>
                        <div className="card-text">
                            <p className="card-name">{props.product.title}</p>
                            <p className="price">{props.product.price} рублей</p>
                        </div>
                    </div>
                )}
            </nav>

    );
}
export default Card;