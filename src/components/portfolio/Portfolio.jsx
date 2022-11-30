import "./portfolio.css";
import IMG1 from "../../assets/kego.png";
import IMG2 from "../../assets/social.jpg";
import IMG3 from "../../assets/tour.jpg";
import IMG4 from "../../assets/messenger.png";
import IMG5 from "../../assets/inventory.jpg";
import IMG6 from "../../assets/video.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Shop@Kego E-commerce App",
    github: "https://github.com/Enyina/shop-kego",
  },
  {
    id: 2,
    image: IMG2,
    title: "Social Media App",
    github: "https://github.com/Enyina/social__media-app",
  },
  {
    id: 3,
    image: IMG3,
    title: "HiTours Tour booking App",
    github: "https://github.com/Enyina/Hitours",
  },
  {
    id: 4,
    image: IMG4,
    title: "Messaging App",
    github: "https://github.com/Enyina/Messager__App",
  },
  {
    id: 5,
    image: IMG5,
    title: "Inventory App",
    github: "https://github.com/Enyina/Inventory-App",
  },
  {
    id: 6,
    image: IMG6,
    title: "Video Sharing App",
    github: "https://github.com/Enyina/Video__sharing-App",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some Of My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn btn-primary" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
