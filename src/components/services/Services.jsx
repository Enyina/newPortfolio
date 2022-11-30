import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop and Maintain User Interface.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User experience optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create tools to improve interaction regardless of browser.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Tests and bug fixes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Refactoring.</p>
            </li>
          </ul>
        </article>

        {/* BACKEND */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design unique on-premise or cloud-based backend system.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile backend app across multiple devices.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design custome backend application to fit any business idea.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Code Refactoring.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Build a custome API to improve existing code or connect to with
                third-party services.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
