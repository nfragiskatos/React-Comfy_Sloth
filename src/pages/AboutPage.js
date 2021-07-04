import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/hero-bcg.jpeg";
import { PageHero } from "../components";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            provident ipsum dolores veritatis blanditiis alias dolorum suscipit,
            dicta quasi culpa expedita? Ad impedit expedita perferendis pariatur
            rerum consequatur, repellendus aliquam. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Odit sint impedit cum porro possimus,
            ea eius culpa quis cumque dolorem. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quod vitae quos ullam harum modi non
            dicta corporis suscipit, at autem aut, deleniti animi ipsam eum
            aliquam eveniet? Nesciunt, beatae incidunt?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
