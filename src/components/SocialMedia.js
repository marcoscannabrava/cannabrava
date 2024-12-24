import React from 'react';
import LinkedInIcon from "/assets/linkedin.svg"
import GitHubIcon from "/assets/github.svg"
import InstagramIcon from "/assets/instagram.svg"
import XIcon from "/assets/xtwitter.svg"

const SocialMedia = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon style={{ height: '32px' }} alt="LinkedIn" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <GitHubIcon style={{ height: '32px' }} alt="GitHub" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon style={{ height: '32px' }} alt="Instagram" />
      </a>
      <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
        <XIcon style={{ height: '32px' }} alt="X" />
      </a>
    </div>
  );
};

export default SocialMedia;