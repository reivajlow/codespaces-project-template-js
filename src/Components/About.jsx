/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/binary.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Soy un estudiante de quinto año de Ingeniería en Estadística con pasión por la ciencia de datos y el machine learning. Me he formado en diversas áreas de la estadística, como el análisis exploratorio, la inferencia, el modelado, la simulación y la optimización(si!, todo acompañado de mucha programación!!!). También tengo experiencia en métodos multivariantes, data mining, econometría, series de tiempo y geoestadística. Manejo diferentes lenguajes de programación y software estadísticos, como Excel, LATEX, Python, Rstudio, SQL server management, Jupyter, Power BI y Matlab. He participado en conferencias y cursos de prestigio, como los impartidos por Victor Leiva, SOCHE, Udemy y coursera. Mi objetivo es aplicar la estadística de forma innovadora y creativa, buscando mejorar la toma de decisiones y difundir su potencial. Tengo habilidades en liderazgo, comunicación y metodología de la investigación. Me considero un profesional competente y comprometido con mi disciplina.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine learning",
  "Data science",
  "time series",
  "Data mining",
  "statistical modeling",
  "statistical inference",
  "optimization and simulation",
  "multivariate methods",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = '"The purpose of computing is insight, not numbers". - Richard Hamming';

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
