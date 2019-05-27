import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "we are the largest property management company here on the island and are able to accommodate any group in any size or budget"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "we are the largest property management company here on the island and are able to accommodate any group in any size or budget"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "we are the largest property management company here on the island and are able to accommodate any group in any size or budget"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "we are the largest property management company here on the island and are able to accommodate any group in any size or budget"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
