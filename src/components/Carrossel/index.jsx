import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://portal.zorgen.tech/customer/api/projetos/');
        setData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 id='text_projetos' className='text-center font-bold text-xl text-titulos mb-7'>Projetos</h1>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={15}
        slidesPerView={2}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        breakpoints={{
          1040: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
