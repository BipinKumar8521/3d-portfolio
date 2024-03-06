import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Bipin
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm a full-stack web developer with a passion for building beautiful
          and functional websites. I have experience working with JavaScript,
          React, Node.js, and other modern web technologies.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div key={skill.id} className="flex block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked as a freelance web developer for over 3 years. During
            this time, I've built websites for a variety of clients, from small
            businesses to large corporations. I'm comfortable working with
            clients to understand their needs and deliver a product that meets
            their expectations.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: experience.iconBg,
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid  ${experience.iconBg}`,
                }}
                date={experience.date}
                iconStyle={{
                  background: experience.iconBg,
                  color: "#fff",
                }}
                icon={<img src={experience.icon} alt={experience.title} />}
              >
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p className="vertical-timeline-element-subtitle">
                  {experience.company_name}
                </p>
                <p>{experience.points.join(" ")}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
