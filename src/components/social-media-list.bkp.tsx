/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
// import useEmiliaConfig from "../hooks/use-emilia-config.bkp"


const SocialMediaList = () => {
  const { socialMedia } = useEmiliaConfig()

  return (
    <React.Fragment>
      {socialMedia.map((entry) => (
        <Styled.a key={entry.title} href={entry.href}>          
          <img src={entry.file} alt={entry.title} 
            sx={{
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
