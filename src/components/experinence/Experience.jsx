import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experince</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>React.JS</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Next.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Node.JS</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>PostgreSQl</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Nest.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
