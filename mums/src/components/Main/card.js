import React, {useEffect, useState} from "react";
import {ProductService} from "../../services/ProductService";
import Modal from 'react-modal';
import '../../CSS/index.css'

function Card(props) {
    const [Base64, setBase64] = useState([]);
    const [state, setState] = useState('');
    //модальное окно - обработка команд
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const closeModal = () => {
      setModalIsOpen(false);
    };
        const modalContent = (
          <div>
            <h2>Заголовок модального окна</h2>
                <div className="card-img">
                    <img className= "img" src={Base64[0]} crossOrigin="anonymous" alt={"product"}/>
                </div>
                <div className="card-text">
                    <p className="card-name">{props.product.title}</p>
                    <p className="price">{props.product.price} рублей</p>
                </div>
            <button onClick={closeModal}>Закрыть</button>
          </div>
        );
    function handleCardClick() {
        setState('cardIsPressed');
        setModalIsOpen(true);
    }
    const ids = props.product.images.map(image => {
        return image.id;
      }).flat();
    //конец
    useEffect(() => {
        init();
    }, []);
    const init = () => {
    setState('loading');
            let images_of_product = ids;
            let url;
            let blobImagesUrls = [];
            for(var i=0;i < images_of_product.length;i++){
                  url = ProductService.GET_IMAGES()+images_of_product[i];
                  fetch(url)
                      .then(response => response.blob())
                      .then(blob => {
                          let image = new Image()
                          image.src = URL.createObjectURL(blob);
                          blobImagesUrls.push(image.src);
                          setState('success');
                          setBase64(blobImagesUrls);
                          })
                      .catch(error => {
                          console.error('Error fetching image:', error);
                      });
                }

                        }

    return (
            <nav className="product justify-content-center text-center">
                {state === 'loading' ? (
                    <div className="loader"></div>
                ) : (
                    <div className="card loader" onClick={handleCardClick}>
                        <div className="card-img">
                            <img className= "img" src={Base64[0]} crossOrigin="anonymous" alt={"product"}/>
                        </div>
                        <div className="card-text" >
                            <p className="card-name">{props.product.title}</p>
                            <p className="price">{props.product.price} рублей</p>
                        </div>
                    </div>
                )}
                {state === 'cardIsPressed' && (
                      <div>
                          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                              {modalContent}
                          </Modal>
                      </div>
                  )}
                </nav>
    );
}
export default Card;