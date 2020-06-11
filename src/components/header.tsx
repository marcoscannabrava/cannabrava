/** @jsx jsx */
import { jsx, Heading, Flex } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
// import { useStaticQuery, graphql } from "gatsby"
// import useEmiliaConfig from "../hooks/use-emilia-config"
import HeaderBackground from "./header-background"
// import SocialMediaList from "./social-media-list"
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
  const fadeProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } })
  const fadeLongProps = useSpring({ config: config.slow, delay: 600, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Flex as="header" variant="layout.projectHead" sx={{boxShadow: `0px 5px 5px 0px rgba(0,0,0,0.5)`}}>
      <HeaderBackground />
      <div sx={{ textAlign: `center`, py: 100, zIndex: 10, height: `95vh` }}>
        <animated.div style={fadeUpProps}>
          <Heading variant="styles.h1">{siteTitle}</Heading>
        </animated.div>
        <animated.div style={fadeUpPropsDelay}>
          <Flex
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
          </Flex>
        </animated.div>
        <div data-testid="social-header" sx={{ mt: 4, mb: 6, a: { mx: 2 } }}>
          <animated.div style={fadeLongProps}>
            {/* <SocialMediaList /> */}
          </animated.div>
        </div>
      </div>
    </Flex>
  )
}

export default Header
