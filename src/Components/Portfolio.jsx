/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Determinantes del precio del cobre segun el tipo de cambio entre clp y usd",
    description:
      "Proyecto de investigación para la asignatura de econometría, en donde se analiza el comportamiento del precio del cobre en relación al tipo de cambio entre el peso chileno y el dólar estadounidense. Se utilizan modelos de series de tiempo, autoregresivos y de medias moviles, ademas de estimaciones por MCO, El trabajo se realizó en Python.",
    url: "https://github.com/reivajlow/Econometria.git",
  },
  {
    title: "Data Science and Machine Learning Portfolio",
    description:
      "A collection of notebooks containing data analysis and machine learning projects I've worked on.",
    url: "https://github.com/reivajlow/Data-science.git",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "on work... :)",
  },
  {
    title: "web site with data base management system",
    description:
      "Proyecto de Bases de datos, en donde se desarrolla un sistema de gestión de base de datos. Se utilizó SQL server management studio, Visual studio, python(with flask, pandas and others), html and css for best visualization.",
    url: "https://github.com/reivajlow/website.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
