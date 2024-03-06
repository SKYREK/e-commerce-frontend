import PropTypes from "prop-types";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function MobileImageSwiper({imgLinks,setCurrentSlide}){
    //check if a mobile device
    const isDesktop = window.innerWidth > 768;
    return(
        <Swiper
            className="w-full h-96"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            navigation={isDesktop}
            slidesPerView={1}     
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
    >
            {
                imgLinks.map((link,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <img className="min-w-full h-50" src={link} 
                            />
                        </SwiperSlide>
                    )
            }
            )
            
            }            
        </Swiper>
    )
}
//add props validation
MobileImageSwiper.propTypes = {
    imgLinks: PropTypes.arrayOf(PropTypes.string).isRequired,
    setCurrentSlide: PropTypes.func.isRequired,
}
const defaultSetCurrentSlide = () => {
    console.log("No setCurrentSlide function provided");
};
MobileImageSwiper.defaultProps = {
    setCurrentSlide: defaultSetCurrentSlide, // Assign the default setCurrentSlide function
};