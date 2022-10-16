import {Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import style from './styles/carousel.module.css'


const CarouselImg = ({projectImg}) => {


    return (
        <Carousel className={style.carousel}>

                {
                    projectImg.map(e => {
                        return (
                            <Carousel.Item className={style.carouselImg}>
                                <img src={e} alt={`${e}`} className={style.img}/>
                            </Carousel.Item>
                        )
                    })
                }

        </Carousel>
    )
}

export default CarouselImg;