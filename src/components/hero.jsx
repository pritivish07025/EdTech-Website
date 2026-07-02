import Carousel from "react-bootstrap/Carousel";

// ✅ Import images correctly (Vite way)
import img1 from "../assets/images/img-hero1.jpg";
import img2 from "../assets/images/img-hero2.jpg";
import img3 from "../assets/images/img-hero3.jpg";

// Hero data
const heroData = [
  {
    id: 1,
    image: img1,
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: img2,
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: img3,
    title: "Enjoy the Difference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor.",
    link: "https://www.twitter.com",
  },
];

export default function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel data-bs-theme="dark">
        {heroData.map((hero) => (
          <Carousel.Item key={hero.id}>
            <img
              className="d-block w-100"
              src={hero.image}
              alt={`slide ${hero.id}`}
            />

            <Carousel.Caption>
              <h5>{hero.title}</h5>
              <p>{hero.description}</p>

              <a className="btn btn-primary" href={hero.link}>
                Learn More <i className="fas fa-chevron-right"></i>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}