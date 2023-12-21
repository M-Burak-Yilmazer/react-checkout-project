import React from "react";
import img1 from "../assets/gepetto.png"

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img src={img1} width="100" className="rounded-circle" alt="a" />
            </div>
            <div className="text-center mt-3">
              <h5 className="mt-2 mb-0">Mister Geppetto</h5>
              <span> Carpenter</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                  Geppetto 
                  also known as Mister Geppetto, is an Italian fictional
                  character in the 1883 novel The Adventures of Pinocchio by
                  Carlo Collodi. Geppetto is an elderly, impoverished woodcarver
                  and the creator (and thus 'father') of Pinocchio. He wears a
                  yellow wig resembling cornmeal mush (called polendina), and
                  consequently his neighbors call him "Polendina" to annoy him.
                  
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin" />
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    className="text-decoration-none text-black "
                    href="https://github.com/anthonyharold67"
                    target="true"
                  >
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/anthonyharold67"
                    target="true"
                  >
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
