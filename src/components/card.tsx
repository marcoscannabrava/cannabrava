/** @jsx jsx */
import { jsx } from "theme-ui"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
// import { ChildImageSharpFluid } from "../types"

type CardProps = {
  item: {
    banner: string
    title: string
    text: string
    tags: string[]
    github_link: string
    website_link: string
  }
  overlay?: string | undefined
  shadow?: string[]
  inGrid?: boolean
}

const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
const shadowArray = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`)

const Card = ({ item, overlay = `0, 0, 0`, shadow = shadowArray, inGrid = false }: CardProps) => {

  return (
    <div className="card">
      <div dangerouslySetInnerHTML={{__html: item.banner}} />
      <div className="card-body">
        <h5 className="card-title"><div dangerouslySetInnerHTML={{__html: item.title}}/></h5>
        <p className="card-text">
        <div dangerouslySetInnerHTML={{__html: item.text}}/>
          <br/><br/>
          {item.tags.map((tag) => {
            return (<div dangerouslySetInnerHTML={{__html: tag}}/>)
          })}
        </p>
        <div className="card-links">
          <a target="_blank" href={item.github_link} className="card-text"><small className="text-muted"><i className="fab fa-github"></i> Click to go to GitHub repo</small></a>
          <a target="_blank" href={item.website_link} className="card-text"><small className="text-muted"><i className="fas fa-external-link-alt"></i> Click to go to Website</small></a>
        </div>
      </div>
    </div>
  )
}

export default Card
