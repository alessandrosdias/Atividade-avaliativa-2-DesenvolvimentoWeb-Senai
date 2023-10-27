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
    src: 'https://www.einerd.com.br/wp-content/uploads/2021/10/sasuke-uchiha-rinnegan-e1633610180714-890x470.jpg',
    altText: 'Slide 1',
    caption: 'Sasuke Uchiha',
    key: 1,
  },
  {
    src: 'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/08/broly_ssjl_2018_dragon_ball_super_broly_by_alejandrors23-dci0hm0.jpg',
    altText: 'Slide 2',
    caption: 'Broly',
    key: 2,
  },
  {
    src: 'https://criticalhits.com.br/wp-content/uploads/2022/09/Collage-Maker-18-Jul-2022-0908-P-910x455.jpg',
    altText: 'Slide 3',
    caption: 'Ayanokoji Kiyotaka',
    key: 3,
  },
];

function Example(args) {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
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
}

export default Example;