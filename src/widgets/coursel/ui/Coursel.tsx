'use client'

import picture from '@/shared/assets/img/picture.png';

import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
  return (
    <section className="">
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
          slidesPerView={1}
          centeredSlides={true}
          allowTouchMove={false}
          navigation={true}
          
          className=""
        >
          <SwiperSlide>
            <Image
              src={
                picture
              }
              width={1300}
              height={500}
              alt="picture"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={
                picture
              }
              alt="picture"
              width={1300}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={
                picture
              }
              alt="picture"
              width={1300}
              height={500}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel
