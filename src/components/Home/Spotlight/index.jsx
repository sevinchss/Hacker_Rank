import cn from "./style.module.css";
import Button from "./../../Button";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import InfoCard from "../InfoCard.jsx";

export default function Spotlight() {
  return (
    <section className={cn.body}>
      <div>
        <h2 className="title ">It’s not a pipeline problem.</h2>
        <h2 className="title green">It’s a spotlight problem.</h2>
        <p>
          Tech hiring needs a reset. From prepping for jobs and practicing
          coding to running a world-class technical interview, give developers
          the tools they need to showcase their skills, passion, and potential.
        </p>
        <div className={cn.locations}>
          <a href="#prep">Prep</a>
          <a href="#screen">Screen</a>
          <a href="#interview">Interview</a>
        </div>
      </div>
      <section className="container">
        <section id="prep" className={cn.skills}>
          <div className={cn.skills_left}>
            <h2>Explore and expand your skills.</h2>
            <p>
              Every idea has a first line of code. Prep for jobs and sharpen
              your skills alongside a global community of developers. Access the
              content you need to develop new skills – and land the job you’ve
              dreamed of.
            </p>
            <button>
              Sign up and practice <span>&#8594;</span>
            </button>
          </div>
          <img
            src="https://www.hackerrank.com/wp-content/uploads/2022/09/community.jpg"
            alt="skills"
          />
        </section>
        <section id="screen" className={cn.movement}>
          <div>
            <h2 className="title green">Join the movement.</h2>
            <h2 className="title">Screen on skills.</h2>
          </div>
          <div className={cn.compare}>
            <ImgComparisonSlider hover="hover" class="slider-example-focus">
              <img
                slot="first"
                src="https://www.hackerrank.com/wp-content/uploads/2022/09/resume.jpg"
              />
              <img
                slot="second"
                src="https://www.hackerrank.com/wp-content/uploads/2022/09/report-2.jpg"
              />
            </ImgComparisonSlider>
          </div>
        </section>
        <div className={cn.info}>
          <InfoCard
            title={"Leave the binary tree behind."}
            desc={
              "Build coding questions using our library of dev-friendly content that challenges them to solve the problems they’d actually tackle on the job."
            }
            link={"Start free trial "}
            img={
              "https://www.hackerrank.com/wp-content/uploads/2022/11/binarytree-1.png"
            }
          />
          <InfoCard
            title={"Focus on what really matters: the code."}
            desc={
              "Build skills-based coding tests with tech problems a developer would encounter on the job — and hire the team behind your next big idea."
            }
            link={"Request a demo  "}
            img={
              "https://www.hackerrank.com/wp-content/uploads/2022/11/code-1.png"
            }
          />
          <InfoCard
            title={"Identify top contenders."}
            desc={
              "Identify top contenders and invite them to meet your team using data-driven decisions that help level the playing field for developers everywhere."
            }
            link={"Learn more"}
            img={
              "https://www.hackerrank.com/wp-content/uploads/2022/09/contenders.png"
            }
          />
        </div>
        <div className={cn.interviews} id="interviews">
          <p>:: Technical interviews ::</p>
          <h2 className="title">
            Interview like it’s <span className="green">2024</span>
          </h2>
          <p>
            Ditch out of reach and out of touch interview questions about golf
            balls and 747s — and turn off your clunky screen share for good.
            Code, create, and collaborate with an IDE built to showcase
            real-world skills in a real-world environment.
          </p>
          <Button text={"Learn more"} />
        </div>
      </section>
    </section>
  );
}
