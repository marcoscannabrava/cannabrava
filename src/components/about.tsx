/** @jsx jsx */
import { jsx } from "theme-ui"
import useAboutData from "../hooks/use-about-data"

const Card = () => {

  const about = useAboutData().markdownRemark.html

  return (
    <div className="about-me" dangerouslySetInnerHTML={{ __html: about }} />
  )
}

export default Card
