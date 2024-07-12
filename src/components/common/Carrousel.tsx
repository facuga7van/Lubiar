'use client'
import React, { useState, useEffect } from 'react'
import './ImageCarousel.css'

interface ImageCarouselProps {
  images: string[]
  interval?: number
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % images.length
      )
    }, interval)

    return () => {
      clearInterval(timer)
    }
  }, [images.length, interval])

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              currentIndex === index ? 'active' : ''
            }
            onClick={() => {
              setCurrentIndex(index)
            }}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
