import { useState } from 'react';

function Gallery({ className = '', width, height, radius = '0px', showThumbs = false, images = [] }) {
  // Eu guardo aqui o índice da imagem atual exibida no carrossel.
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex];
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === images.length - 1;

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));

  return (
    <div className={`gallery ${className}`.trim()} style={{ width }}>
      <div className="gallery-main" style={{ height }}>
        <button type="button" onClick={handlePrev} disabled={isAtStart} className="gallery-arrow left">
          <img src="/assets/arrow-left.svg" alt="anterior" />
        </button>

        {currentImage ? (
          <img
            key={currentImage.src}
            src={currentImage.src}
            alt={`slide-${currentIndex + 1}`}
            className="gallery-image"
            style={{ borderRadius: radius }}
          />
        ) : null}

        <button
          type="button"
          onClick={handleNext}
          disabled={isAtEnd}
          className="gallery-arrow right"
        >
          <img src="/assets/arrow-right.svg" alt="próximo" />
        </button>
      </div>

      {showThumbs ? (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`gallery-thumb ${index === currentIndex ? 'active' : ''}`}
              style={{ borderRadius: radius }}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={image.src} alt={`thumb-${index + 1}`} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Gallery;
