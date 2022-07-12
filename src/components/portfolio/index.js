import React from "react";
import { Link } from "react-router-dom";

const Portfolio = ({ link, thumb, classes, title, category, variant }) => {
  return (
    <div className={`portfolio-item ${classes ? classes : " "}`}>
      <a className={"d-block"} href={link} target="_black">
        {variant === "column" ? (
          <div className="portfolio-image">
            <img
              src={require("../../assets/images/portfolio/" + thumb)}
              alt={title}
            />
          </div>
        ) : (
          <div
            className="portfolio-image"
            style={{
              backgroundImage: `url(${require("../../assets/images/portfolio/" +
                thumb)})`,
            }}
          />
        )}
        <div className="portfolio-content">
          <h4 className="title">{title}</h4>
          <div className="category">
            <span>{category}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Portfolio;
