import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/components/carousel.css";

function Images_carousel() {
  return (
    <div id="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="../../public/images/give-food.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="../../public/images/give-soup.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img-fluid"
              src="../../public/images/give-food.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Images_carousel;