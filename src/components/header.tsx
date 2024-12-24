/** @jsx jsx */
import { jsx } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
// import { useStaticQuery, graphql } from "gatsby"
// import useEmiliaConfig from "../hooks/use-emilia-config"
import SocialMediaList from "./social-media-list"
import '../assets/fonts.css'
import useSiteMetadata from "../hooks/use-site-metadata"

const Header = () => {
  const { siteTitle } = useSiteMetadata()

  const fadeUpProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  const fadeUpPropsDelay = useSpring({
    config: config.slow,
    delay: 250,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })
  
  const fadeLongProps = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <div
      sx={{
        boxShadow: `0px 5px 5px 0px rgba(0,0,0,0.5)`,
        backgroundImage: `url(https://res.cloudinary.com/mpc-cloud/image/upload/c_scale,w_1808/v1585134904/marcoscannabrava_github/surf_rbypcn.jpg)`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
        }}>
      <div sx={{ textAlign: `center`, py: 100, zIndex: 10, height: `95vh` }}>
        {/* <animated.div style={fadeUpProps}>
          <Styled.h1>{siteTitle}</Styled.h1>
        </animated.div>
        <animated.div style={fadeUpPropsDelay}> */}
          <div
            sx={{
              svg: {
                width: `20px`,
                height: `20px`,
                ".primary": { color: `iconPrimary` },
                ".secondary": { color: `iconSecondary` },
                mr: 2,
              },
              justifyContent: `center`,
              alignItems: `center`,
              color: `text`,
            }}
          >
          </div>
        {/* </animated.div> */}
        <div data-testid="social-header" sx={{ mt: 4, mb: 6, a: { mx: 2 } }}>
          <SocialMediaList />
          {/* <animated.div style={fadeLongProps}>
          </animated.div> */}
        </div>
      </div>
    </div>
  )
}

export default Header
