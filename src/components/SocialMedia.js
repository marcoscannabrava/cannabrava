import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import LinkedInIcon from "/assets/linkedin.svg"
import GitHubIcon from "/assets/github.svg"
import InstagramIcon from "/assets/instagram.svg"
import XIcon from "/assets/xtwitter.svg"
import Email from "/assets/email.svg"

const SocialMedia = ({ size = 32 }) => {
  const data = useStaticQuery(graphql`
      query SocialQuery {
        site {
          siteMetadata {
            social {
              xtwitter
              instagram
              linkedin
              github
              email
            }
          }
        }
      }
    `)

    const social = data.site.siteMetadata?.social
  return (
    <div className="social-media">
      <a className="social-media-icon" href={social.linkedin} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon style={{ height: `${size}px` }} alt="LinkedIn" />
      </a>
      <a className="social-media-icon" href={social.github} target="_blank" rel="noopener noreferrer">
        <GitHubIcon style={{ height: `${size}px` }} alt="GitHub" />
      </a>
      <a className="social-media-icon" href={social.instagram} target="_blank" rel="noopener noreferrer">
        <InstagramIcon style={{ height: `${size}px` }} alt="Instagram" />
      </a>
      <a className="social-media-icon" href={social.xtwitter} target="_blank" rel="noopener noreferrer">
        <XIcon style={{ height: `${size}px` }} alt="X" />
      </a>
      <a className="social-media-icon" href={social.email} target="_blank" rel="noopener noreferrer">
        <Email style={{ height: `${size}px` }} alt="X" />
      </a>
    </div>
  );
};

export default SocialMedia;