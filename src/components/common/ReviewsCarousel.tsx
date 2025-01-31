'use client'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Typography from '@/components/ui/typography';
import Link from 'next/link';

interface Review {
  name: string;
  score: string;
  date: string;
  text: string;
}

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/reviews.json');
        const data: Review[] = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    void fetchReviews();
  }, []);
  if (reviews.length === 0) return <p>Cargando opiniones...</p>;

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i} className=''>
              <div className="group bg-white border border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-indigo-600 hover:shadow-sm mb-10">
                <div className='text-left'>
                <Typography variant="h5" className="font-bold"> ⭐ {review.score}</Typography>
                </div>
                <div className="text-center">
                  <Typography variant="h4" className="font-bold">{review.name}</Typography>
                  <Typography variant="p" className="text-gray-500">{review.date}</Typography>
                  <p className="text-gray-700 mt-2">{review.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 text-center">
          <Typography variant="h5" className="text-gray-700">Querés compartir tu experiencia?</Typography>
          <Link href="https://www.facebook.com/profile.php?id=61559673185832" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 px-6 py-3 filterHighlight buttonLub text-white font-semibold rounded-lg transition">Dejá tu opinión en Facebook</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
