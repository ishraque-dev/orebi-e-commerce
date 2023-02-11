import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { images } from '../../assets/constants';
import { Link } from 'react-router-dom';
export default function Banner({ Image }) {
  const [activeDot, setActiveDot] = useState(0);
  const imagArr = [
    images.banner1,
    images.banner2,
    images.banner3,
    images.banner4,
  ];
  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
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
                color: '#232F3E',
                borderRight: '2px solid #232F3E',
              }
            : {
                width: '30px',
                borderRight: '2px solid white',
                padding: '10px 0',
                color: 'transparent',
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {imagArr.map((image, i) => {
        return (
          <Link to="#" className="outline-none">
            <img
              src={image}
              className="_custom_from_index_css--banner-effect"
            />
          </Link>
        );
      })}
    </Slider>
  );
}
