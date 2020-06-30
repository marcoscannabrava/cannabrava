/** @jsx jsx */
/* eslint no-shadow: 0 */
import { jsx, Container, Box } from "theme-ui"
import { useSpring, animated, config } from "react-spring"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import Card from "./card"
import { random } from "core-js/fn/number"
// import AboutMeMDX from "../texts/about-me"

type Project = {
  banner: string
  title: string
  text: string
  tags: string[]
  github_link: string
  website_link: string
}

type ProjectsStaticQuery = {
  allProjectsYaml: {
    nodes: {}[]
  },
  allImageSharp: {
    nodes: {}[]
  },
  allFile: {
    nodes: {}[]
  }
}

const Projects = ({ projects }: Project[]) => {
  const projs = useStaticQuery<ProjectsStaticQuery>(graphql`
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
      allImageSharp {
        nodes {
          fluid {
            originalName
            src
            ...GatsbyImageSharpFluid
          }
        }
      }
      allFile(filter: { extension: { eq: "svg" } }) {
        nodes {
          publicURL
          name
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

  console.log('svgs: ', projs.allFile.nodes)

  return (
    <div>
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
          <div
            sx={{
              maxWidth: '90vw',
              margin: '5vw auto'
            }}
          >
            {projs.allProjectsYaml.nodes.map((project: Project) => {

              let projImg, projTags = undefined;
              if(projs.allImageSharp.nodes) {
                projImg = projs.allImageSharp.nodes.find((el) => el.fluid.originalName === project.title)
              }
              if(projs.allFile.nodes){
                projTags = projs.allFile.nodes.filter((el) => project.tags.includes(el.name))
              }

              return (
                <Card key={project.title} item={project} img={projImg} tags={projTags} />
              )
            })}
          </div>
        </animated.div>
      </Box>
    </div>
  )
}

export default Projects
