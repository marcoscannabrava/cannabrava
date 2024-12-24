/** @jsx jsx */
/* eslint no-shadow: 0 */
import { useState, useEffect, useRef } from 'react'
import { jsx, Box } from "theme-ui"
import { useSpring, config } from "react-spring"
import Header from "./header"
import Footer from "./footer"
import ProjectCard from "./ProjectCard"
import AboutMe from "./about"
import useProjectsData from "../hooks/use-projects-data"


type Project = {
  banner: string
  title: string
  text: string
  tags: {
    publicURL: string,
    name: string
  }[]
  github_link: string
  website_link: string
}

const Projects = ({ projects }: Project[]) => {

  const [on, toggle] = useState(false);
  const aboutContainer = useRef(null);
  const tagsContainer = useRef(null);
  const projectsContainer = useRef(null);
  const projs = useProjectsData();

  const fadeUpProps = useSpring({
    config: config.slow,
    delay: 300,
    from: { opacity: 0, transform: `translate3d(0, 30px, 0)` },
    to: on ? { opacity: 1, transform: `translate3d(0, 0, 0)` } : undefined,
  });

  const fadeProps = useSpring({ config: config.slow, from: { opacity: 0 }, to: { opacity: 1 } });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(handleIntersection);

  //   function handleIntersection(entries, observer) {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) toggle(true);
  //     });
  //   }

  //   const observerEntries = [aboutContainer.current];

  //   observerEntries.map(div => observer.observe(div));

  //   return () => observerEntries.map(div => observer.unobserve(div));
  // }, []);

  return (
    <div>
      <Header />
      <Box as="main" variant="layout.main">
        <div ref={aboutContainer} style={fadeUpProps}>
          <AboutMe />
        </div>
      </Box>
      <Box as="main" variant="layout.main">
        <div style={{ width: 'fit-content'}}>
          <h1>&laquo; &nbsp; &nbsp; Projects &nbsp; &nbsp; &raquo;</h1>
          <div>
            scroll projects section sideways to see more 😜 <br/>
            hover/click icons if you don't know what they are 👍
          </div>
        </div>
        <div ref={tagsContainer}
          style={{
            display: 'flex',
            maxWidth: ['90%', '60%'], 
            flexWrap: 'wrap',
            justifyContent: 'center',
            "> *": {margin: '.5em'}
          }}>
          {projs.allFile.nodes.map((tag) => {
            return (
              <div>
                <img key={tag.publicURL} style={{
                  height: '40px', 
                  marginRight: '12px',
                  transition: `all .2s ease-in-out`,
                  // "&:hover": { transform: `scale(1.5)` }
                  }} src={tag.publicURL} alt={tag.name}
                />
                <div>{tag.name}</div>
              </div>
            )})}
        </div>
        <div ref={projectsContainer} style={{
          maxWidth: '100vw',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          maxHeight: '1600px',
          overflowX: 'auto',
          // '::-webkit-scrollbar': { width: '0', background: 'transparent' }
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
              <ProjectCard key={project.title} item={project} img={projImg} tags={projTags} />
            )
          })}
        </div>
      </Box>
      <Footer />
    </div>
  )
}

export default Projects
