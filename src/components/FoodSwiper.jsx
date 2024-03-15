// import cost
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { ash, malidate, robin, sydney } from "../assets/images";

export default function FoodSwiper() {
    return (
        <Swiper
            slidesPerView={3}
            breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20},
                760: { slidesPerView: 3, spaceBetween: 30}
            }}
        >
            <SwiperSlide>
                <a href="/" className="relative flex rounded-md overflow-hidden h-24 sm:h-36 md:h-44">
                    <img src={ash} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/" className="relative flex rounded-md overflow-hidden h-24 sm:h-36 md:h-44">
                    <img src={malidate} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/" className="relative flex rounded-md overflow-hidden h-24 sm:h-36 md:h-44">
                    <img src={robin} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="/" className="relative flex rounded-md overflow-hidden h-24 sm:h-36 md:h-44">
                    <img src={sydney} alt="" className="absolute left-0 top-0 h-full w-full object-cover" />
                </a>
            </SwiperSlide>
        </Swiper>
    )
}
