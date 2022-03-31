import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-container">
      <div className="social-media-div">
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google"></i>
          <span></span>
        </a>
      </div>
      {/*<div className="social-media-div">*/}
      {/*  <a*/}
      {/*    href={socialMediaLinks.linkedin}*/}
      {/*    className="icon-button linkedin"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <i className="fab fa-react"></i>*/}
      {/*    <span></span>*/}
      {/*  </a>*/}
      {/*  <a*/}
      {/*    href={socialMediaLinks.instagram}*/}
      {/*    className="icon-button node"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <i className="fab fa-node-js"></i>*/}
      {/*    <span></span>*/}
      {/*  </a>*/}
      {/*  <a*/}
      {/*    href={`mailto:${socialMediaLinks.gmail}`}*/}
      {/*    className="icon-button google"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <i className="fab fa-laravel"></i>*/}
      {/*    <span></span>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
}
