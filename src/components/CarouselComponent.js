import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src:
      'https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2560/v1535322021/website-template-3/cover-homepage-1.jpg',
    altText: 'Slide 1',
    caption: 'BINCA.INC',
    header: 'Food Delivery Service',
  },
  {
    src:
      'https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2560/v1535322195/website-template-3/cover-homepage-2.jpg',
    altText: 'Slide 2',
    caption: 'BINCA.INC',
    header: 'Food Delivery Service',
  },
  {
    src:
      'https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2560/v1535322386/website-template-3/cover-homepage-4.jpg',
    altText: 'Slide 3',
    caption: 'BINCA.INC',
    header: 'Food Delivery Service',
  },
];

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <img className="img-fluid" src={item.src} alt={item.altText} />
      <CarouselCaption
        captionText={item.header}
        captionHeader={item.caption}
      />
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="cover carousel slide"
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselComponent;