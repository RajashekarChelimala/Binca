import React, { useState } from "react";
import {
  Button,
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Media,
  Row,
} from "reactstrap";

const Main = () => {
  const menuItems = [
    {
      title: "Food",
      imageUrl:
        "https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535882302/website-template-3/homepage-food.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor neque, condimentum quis ante ac, imperdiet varius sapien. Maecenas commodo ante et odio varius, at placerat mi tristique.",
      link: "pages/food.html",
    },
    {
      title: "Desserts",
      imageUrl:
        "https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535885127/website-template-3/homepage-desserts.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor neque, condimentum quis ante ac, imperdiet varius sapien. Maecenas commodo ante et odio varius, at placerat mi tristique.",
      link: "pages/desserts.html",
    },
    {
      title: "Drinks",
      imageUrl:
        "https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535885398/website-template-3/homepage-drinks.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor neque, condimentum quis ante ac, imperdiet varius sapien. Maecenas commodo ante et odio varius, at placerat mi tristique.",
      link: "pages/drinks.html",
    },
  ];

  const testimonials = [
    {
      imgSrc:
        "https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_190/v1536003465/website-template-3/homepage-testimonials-1.jpg",
      altText: "Testimonial 1",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et consequat augue. Morbi condimentum interdum magna sit amet pulvinar.",
      author: "Michael Freemon, Trip Advisor",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_190/v1536003765/website-template-3/homepage-testimonials-2.jpg",
      altText: "Testimonial 2",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et consequat augue. Morbi condimentum interdum magna sit amet pulvinar.",
      author: "Marie Lu, Trip Advisor",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_190/v1536003858/website-template-3/homepage-testimonials-3.jpg",
      altText: "Testimonial 3",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et consequat augue. Morbi condimentum interdum magna sit amet pulvinar.",
      author: "Jason Wu, Trip Advisor",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_190/v1536003941/website-template-3/homepage-testimonials-4.jpg",
      altText: "Testimonial 4",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et consequat augue. Morbi condimentum interdum magna sit amet pulvinar.",
      author: "Emily Henderson, Trip Advisor",
    },
  ];

  const MenuItem = ({ item }) => (
    <Col md={4} className={`homepage-${item.title.toLowerCase()}`}>
      <Media className="mb-4">
        <Media left>
          <Media
            object
            src={item.imageUrl}
            alt={`Menu ${item.title}`}
            className="rounded-circle lazyload"
            width="100"
            height="100"
          />
        </Media>
        <Media body className="ml-3">
          <Media heading tag="h3" className="special-title-2">
            {item.title}
          </Media>
          <p className="homepage-menu-description">{item.description}</p>
          <Button color="outline-dark" href={item.link}>
            ORDER NOW
          </Button>
        </Media>
      </Media>
    </Col>
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    if (animating) return;
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = testimonials.map((item, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
      className="my-3"
    >
      <Media>
        <Media left>
          <Media
            object
            src={item.imgSrc} // Corrected attribute name
            alt={item.altText} // Corrected attribute name
            className="d-block mx-auto rounded-circle img-thumbnail"
          />
        </Media>
        <Media body className="ml-3">
          <blockquote>
            <p className="mb-3">{item.quote}</p>
            <b>{item.author}</b>
          </blockquote>
        </Media>
      </Media>
    </CarouselItem>
  ));

  return (
    <Container fluid className="text-center">
      <Row className="px-5 py-5">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </Row>
      <Row
        className="text-white px-5 py-5"
        style={{ backgroundColor: "#050e24" }}
      >
        <Col> 
          <div className="homepage-about-us-caption">
            <h2 className="special-title-1 py-3">ABOUT US</h2>
            <h3 className="special-title-2">Tradition &amp; Passion</h3>
            <div id="about-description" className="py-3">
              <p className="py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dolor neque, condimentum quis ante ac, imperdiet varius sapien.
                Maecenas commodo ante et odio varius, at placerat mi tristique.
                Etiam et neque et magna finibus vestibulum.
              </p>
              <Button
                color="outline-light"
                href="pages/about.html"
                role="button"
              >
                OUR STORY
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="py-5" style={{ backgroundColor: "#c8d1c5" }}>
        <div className="homepage-testimonials-caption">
          <h2 className="special-title-1">TESTIMONIALS</h2>
          <h3 className="special-title-2">What Our Customers Say</h3>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="homepage-testimonials-carousel"
          >
            <CarouselIndicators
              items={testimonials}
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
        </div>
      </Row>
    </Container>
  );
};

export default Main;
