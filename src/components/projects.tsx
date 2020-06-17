/** @jsx jsx */
/* eslint no-shadow: 0 */
import { jsx, Container, Box } from "theme-ui"
import { useSpring, animated, config } from "react-spring"
import { graphql, useStaticQuery } from "gatsby"
// import { ChildImageSharpFluid } from "../types"
import Layout from "./layout"
import Header from "./header"
import Card from "./card"
// import AboutMeMDX from "../texts/about-me"

type Props = {
  projects: {
    banner: string
    title: string
    text: string
    tags: string[]
    github_link: string
    website_link: string
  }[]
}

type ProjecsStaticQuery = {
  allProjectsYaml: {
    nodes: {}[]
  }
}
// const Projects = () => {
const Projects = ({ projects }: Props) => {
  const data = useStaticQuery<ProjecsStaticQuery>(graphql`
    query {
      allProjectsYaml {
        nodes {
          banner
          title
          text
          tags
          github_link
          website_link
        }
      }
    }
  `)

  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 600,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  })

  return (
    <Layout>
      <Header />
      <Container
        sx={{
          mt: `5rem`,
          ml: [3, 5],
          mr: [3, 5],
          width: `auto`
        }}
      >
        {/* <AboutMeMDX /> */}
      </Container>
      <Box as="main" variant="layout.main">
        <animated.div style={fadeUpProps}>
          <Container
            sx={{
              mt: `5rem`,
              display: `grid`,
              gridTemplateColumns: [`1fr`, `repeat(auto-fill, minmax(350px, 1fr))`],
              gridColumnGap: 4,
            }}
          >
            {data.allProjectsYaml.nodes.map((project) => {
              // const val = data.allProject.nodes[index].parent.fields.colorThief
              // const shadow = `${val[0]}, ${val[1]}, ${val[2]}`

              const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
              const shadowArray = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

              return (
                <Card key={project.title} item={project} inGrid />
                // <img src={`https://via.placeholder.com/${project}`} alt=""/>
              )
            })}
          </Container>
        </animated.div>
      </Box>
    </Layout>
  )
}

export default Projects
