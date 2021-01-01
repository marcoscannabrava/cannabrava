/** @jsx jsx */
import { jsx } from "theme-ui"
import useAboutData from "../hooks/useAboutData"

const About = () => {

  const about = useAboutData().markdownRemark.html

  return (
    <div className="about-me" dangerouslySetInnerHTML={{ __html: about }} />
  )
}

export default About
