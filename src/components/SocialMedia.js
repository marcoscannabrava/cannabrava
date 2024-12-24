import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import LinkedInIcon from "/assets/linkedin.svg"
import GitHubIcon from "/assets/github.svg"
import InstagramIcon from "/assets/instagram.svg"
import XIcon from "/assets/xtwitter.svg"
import Email from "/assets/email.svg"
import CV from "/assets/cv.svg"

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
              curriculum
            }
          }
        }
      }
    `)

    const social = data.site.siteMetadata?.social
  return (
    <div className="social-media">
      <a className="social-media-icon" href={social.linkedin} target="_blank" rel="noopener noreferrer" title="linkedin">
        <LinkedInIcon style={{ height: `${size}px` }} alt="LinkedIn" />
      </a>
      <a className="social-media-icon" href={social.github} target="_blank" rel="noopener noreferrer" title="github">
        <GitHubIcon style={{ height: `${size}px` }} alt="GitHub" />
      </a>
      <a className="social-media-icon" href={social.instagram} target="_blank" rel="noopener noreferrer" title="instagram">
        <InstagramIcon style={{ height: `${size}px` }} alt="Instagram" />
      </a>
      <a className="social-media-icon" href={social.xtwitter} target="_blank" rel="noopener noreferrer" title="x.com">
        <XIcon style={{ height: `${size}px` }} alt="X" />
      </a>
      <a className="social-media-icon" href={social.email} target="_blank" rel="noopener noreferrer" title="email">
        <Email style={{ height: `${size}px` }} alt="email" />
      </a>
      <a className="social-media-icon" href={social.curriculum} target="_blank" rel="noopener noreferrer" title="curriculum">
        <CV style={{ height: `${size}px` }} alt="CV" />
      </a>
    </div>
  );
};

export default SocialMedia;