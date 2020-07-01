/** @jsx jsx */
import { jsx } from "theme-ui"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type CardProps = {
  item: {
    banner: string
    title: string
    text: string
    tags: string[]
    github_link: string
    website_link: string
  },
  img: {
    fluid: {}
  },
  tags: {}[]
}

const Card = ({ item, img, tags }: CardProps) => {

  const styles = {
    links: {display: 'flex', justifyContent: 'space-between'},
    textMuted: {fontSize: 0, color: 'textMuted'},
    gridItem: {maxWidth: '400px', padding: '1rem'},
    card: {
      backgroundColor: '#ffffff',
      borderRadius: `10px`,
      boxShadow: `0 3px 15px rgba(60, 60, 60, 0.3)`
    }
  }

  let titleImage = img ? 
    <Img 
      imgStyle={{width: '100%', objectFit: 'contain', objectPosition: 'right'}}
      style={{height: '3em', width: '50%', marginLeft: 'auto'}}
      fluid={img.fluid} 
    /> 
    : 
    item.title;
  
  return (
    <div className="grid-item" sx={styles.gridItem}>
      <div className="card" sx={styles.card}>
        <div sx={{paddingTop: '1rem'}} dangerouslySetInnerHTML={{__html: item.banner}} />
        <div className="card-body" sx={{padding: '0.5rem 1rem 0.75rem 1rem'}}>
          <h5 className="card-title" sx={{margin: '0'}}>
            {titleImage}
          </h5>
          <div className="card-text">
            <p sx={{marginBottom: '1.5em', textAlign: 'justify'}}>{item.text}</p>
            {tags.map((tag) => {
              return <img key={tag.publicURL} sx={{height: '40px', marginRight: '12px'}} src={tag.publicURL} alt={tag.name} /> 
            })}
          </div>
          <div className="card-links" sx={styles.links}>
            <a sx={styles.textMuted} target="_blank" href={item.github_link} className="card-text">
              <small className="text-muted"><FontAwesomeIcon icon={['fab', 'github']} /> Click to go to GitHub repo</small>
            </a>
            <a sx={styles.textMuted} target="_blank" href={item.website_link} className="card-text">
              <small className="text-muted"><FontAwesomeIcon icon='external-link-alt' /> Click to go to Website</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
