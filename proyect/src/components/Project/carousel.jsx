import {Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import style from './styles/carousel.module.css'


const CarouselImg = ({projectImg, gym}) => {

    console.log('gymbro', gym)

    return (
        <Carousel className={gym ? style.carouselContGym : style.carouselImg} variant='dark'>

                {
                    projectImg.map(e => {
                        return (
                            <Carousel.Item key={`${e}`} className={gym ? style.carouselGym : style.carouselImg}>
                                <img src={e} alt={`${e}`} className={gym ? style.imgGym : style.carouselImg}/>
                            </Carousel.Item>
                        )
                    })
                }

        </Carousel>
    )
}

export default CarouselImg;