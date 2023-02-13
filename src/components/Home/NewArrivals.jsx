import { Heading, Product } from '../UI';
import { images } from '../../assets/constants';
import Slider from 'react-slick';
import { SampleNextArrow, SamplePrevArrow } from '../../utils/slick-slider';
import useWindowResize from '../../hooks/useWindowResize';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
function NewArrivals() {
  const [activeMenu] = useWindowResize();
  let slide = activeMenu ? 4 : 2;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mx-auto max-w-container ">
      <Heading title="New Arrivals" />
      <div className="mt-5">
        <Slider {...settings}>
          {/* <div>{null || <Skeleton className="h-full" />}</div> */}
          <Product image={images.product} badge={true} badgeSlag="New" />
          <div>
            <Product image={images.product} badge={true} badgeSlag="New" />
          </div>
          <div>
            <Product image={images.product} badge={true} badgeSlag="New" />
          </div>
          <Product image={images.product} badge={true} badgeSlag="New" />
          <div>
            <Product image={images.product} badge={true} badgeSlag="New" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default NewArrivals;
