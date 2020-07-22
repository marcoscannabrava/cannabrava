/** @jsx jsx */
/* eslint no-shadow: 0 */
import { useState, useEffect, useRef } from 'react'
import { jsx, Box } from "theme-ui"
import { useSpring, animated, config } from "react-spring"
import Header from "./header"
import Footer from "./footer"
import Card from "./card"
import AboutMe from "./about"
import useProjectsData from "../hooks/use-projects-data"


type Project = {
  banner: string
  title: string
  text: string
  tags: string[]
  github_link: string
  website_link: string
}

const Projects = ({ projects }: Project[]) => {

  const [on, toggle] = useState(true); // change to false
  const [tags, setTags] = useState(null);
  const aboutContainer = useRef(null);
  const tagsContainer = useRef(null);
  const projectsContainer = useRef(null);
  const projs = useProjectsData();

  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 500,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: on ? { opacity: 1, transform: `translate3d(0, 0, 0)` } : undefined,
  });

  const fadeProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } });
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersection);

  //   function handleIntersection(entries, observer) {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) toggle(!on);
  //     });
  //   }

  //   const observerEntries = [aboutContainer.current, tagsContainer.current, projectsContainer.current];

  //   observerEntries.map(div => observer.observe(div));

  //   return () => observerEntries.map(div => observer.unobserve(div));
  // });

  return (
    <div>
      <Header />
      <Box as="main" variant="layout.main">
        <animated.div ref={aboutContainer} style={fadeUpProps}>
          <AboutMe />
        </animated.div>
      </Box>
      <Box as="main" variant="layout.main">
        <h1>Projects</h1>
        <animated.div ref={tagsContainer} style={fadeUpProps}>
          {projs.allFile.nodes.map((tag) => {
            return (
              <img key={tag.publicURL} sx={{height: '40px', marginRight: '12px'}} src={tag.publicURL} alt={tag.name} />
            )})}
        </animated.div>
        <animated.div ref={projectsContainer} style={fadeUpProps} sx={{
          maxWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          maxHeight: '1600px',
          overflowX: 'auto',
          '::-webkit-scrollbar': { width: '0', background: 'transparent' }
          }}>
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
        </animated.div>
      </Box>
      <Footer />
    </div>
  )
}

export default Projects
