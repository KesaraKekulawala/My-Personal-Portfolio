import WSPGallery from './WSPGallery';

import Img1 from './../../src/assets/img/My Photos/1.jpg';
import Img2 from './../../src/assets/img/My Photos/2.jpg';
import Img3 from './../../src/assets/img/My Photos/3.jpg';
import Img4 from './../../src/assets/img/My Photos/4.jpg';
import Img5 from './../../src/assets/img/My Photos/5.jpg';

export function Gallery() {

    const galleryImages = [
        {
           img: Img1
        },
        {
            img: Img2
         },
         {
            img: Img3
         },
         {
            img: Img4
         },
         {
            img: Img5
         }
    ]

    return (
        <WSPGallery 
        galleryImages={galleryImages}
        />
    )
}