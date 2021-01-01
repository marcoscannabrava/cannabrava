/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"


const SocialMediaList = () => {

  const socialMedia = [
    { title: `Instagram`, href: "https://www.instagram.com/marcoscannabrava/", file: "instagram.png" },
    { title: `GitHub`, href: "https://github.com/marcoscannabrava", file: "github3.png" },
    { title: `Twitter`, href: "https://twitter.com/mpcannabrava", file: "twitter2.png" },
    { title: `LinkedIn`, href: "https://www.linkedin.com/in/marcos-cannabrava/", file: "linkedin.png" },
    { title: `Email`, href: "mailto:mpcannabrava@gmail.com", file: "email.png" }
  ]

  return (
    <React.Fragment>
      {socialMedia.map((entry) => (
        <Styled.a key={entry.title} href={entry.href}>
          <img src={entry.file} alt={entry.title} 
            sx={{
              height: '40px',
              transition: `all .2s ease-in-out`,
              "&:hover": { transform: `scale(1.5)` }
            }}
          />
        </Styled.a>
      ))}
    </React.Fragment>
  )
}

export default SocialMediaList
