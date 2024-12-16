import { Link } from "react-router-dom";
import { ImGithub, ImLinkedin2 } from "react-icons/im";

import Container from "./Container";
import GridContainer from "./GridContainer";

function Footer() {
  return (
    <div className="mt-[50px] bg-textColor text-center text-white">
      <Container>
        <div className="py-[40px] text-sm">
          <GridContainer>
            <div>
              <h5 className="mb-[5px] text-xl uppercase">Address</h5>
              <p className="text-lightGray">Pune, India</p>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">Book A Table</h5>
              <p className="text-lightGray">
                Tarun Singh Restaurant.
                <br /> Visit us in Pune for an unforgettable experience.
              </p>
              <span className="text-yellow">(+91) 7020580682</span>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">Opening Hour</h5>
              <p className="text-lightGray">Monday – Friday: 8am – 10pm</p>
              <p className="text-lightGray">Saturday: 9am – 11pm</p>
              <p className="text-lightGray">Sunday: Closed</p>
            </div>

            <div>
              <h5 className="mb-[5px] text-xl uppercase">News Letter</h5>
              <p className="text-lightGray ">
                Subscribe to the weekly newsletter for all the latest updates
              </p>
              <div className="mt-[10px] flex items-center border border-lightGray">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full bg-transparent p-[10px] outline-none"
                />
                <button className="bg-yellow p-[10px] text-textColor hover:bg-darkYellow">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-[10px] text-xl md:flex-col md:justify-start">
              <Link
                to={"https://github.com/Tarun26102003"}
                target="_blank"
                className="hover:text-yellow"
              >
                <ImGithub />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/tarun-banafar-6b880524b"}
                target="_blank"
                className="hover:text-yellow"
              >
                <ImLinkedin2 />
              </Link>
            </div>
          </GridContainer>
        </div>
      </Container>
      <p className="bg-yellow p-[20px] text-textColor ">
        Copyright © 2024{" "}
        <Link
          to={"https://www.linkedin.com/in/tarun-banafar-6b880524b"}
          target="_blank"
          className="underline"
        >
          Tarun Singh
        </Link>
        . All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
