import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { images } from '../../assets/constants';
import { Link } from 'react-router-dom';
export default function Banner({ Image }) {
  const [activeDot, setActiveDot] = useState(0);
  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setActiveDot(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '8%',
          transform: 'translateY(-50%)',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === activeDot
            ? {
                width: '30px',
                color: 'black',
                borderRight: '2px solid black',
              }
            : {
                width: '30px',
                color: 'black',
                borderRight: '2px solid white',
                padding: '10px 0',
                color: 'transparent',
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      {Array(4)
        .fill()
        .map((_, i) => {
          return (
            <Link to="#">
              <Image src={images.banner} />
            </Link>
          );
        })}
    </Slider>
  );
}
