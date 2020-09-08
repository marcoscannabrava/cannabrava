/** @jsx jsx */
import { jsx } from "theme-ui"
import theme from '../gatsby-plugin-theme-ui'
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

const ProjectCard = ({ item, img, tags }: CardProps) => {

  const styles = {
    links: {display: 'flex', justifyContent: 'space-around'},
    textMuted: {
      fontSize: 1, color: 'textMuted', margin: '1em 0 0.5em 0', 
      "&:hover": { transform: `scale(1.3)`, transition: `all .2s ease-in-out` }
    },
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
  

  function ExternalLink(props) {
    if (props.type === 'github' && props.link) {
      return (
        <a sx={styles.textMuted} target="_blank" href={props.link} className="card-text">
          <small className="text-muted"><FontAwesomeIcon icon={['fab', 'github']} />GitHub</small>
        </a>
      )
    } else if (props.type === 'website' && props.link) {
      return (
        <a sx={styles.textMuted} target="_blank" href={props.link} className="card-text">
          <small className="text-muted"><FontAwesomeIcon icon='external-link-alt' />Website</small>
        </a>
      )
    } else {
      return null
    }
  }

  return (
    <div className="grid-item" sx={styles.gridItem}>
      <div className="card" sx={styles.card}>
        <div sx={{paddingTop: '1rem'}} dangerouslySetInnerHTML={{__html: item.banner}} />
        <div className="card-body" sx={{padding: '0.5rem 1rem 0.75rem 1rem', borderTop: '1px solid rgba(0,0,0,0.3)'}}>
          <h5 className="card-title" sx={{margin: '0'}}>
            {titleImage}
          </h5>
          <div className="card-text">
            <p sx={{textAlign: 'justify'}}>{item.text}</p>
            <div sx={{
              placeContent: 'center',
              display: 'flex',
              maxWidth: '100%', 
              flexWrap: 'wrap',
              "> *": {margin: '.1em'}
            }}>
              {tags.map((tag) => {
                return (
                  <div sx={theme.tooltipBox}>
                    <img key={tag.publicURL} sx={{height: '40px', marginRight: '12px'}} src={tag.publicURL} alt={tag.name} />
                    <div sx={theme.tooltip}>{tag.name}</div>
                  </div>
                )})}
            </div>
          </div>
          <div className="card-links" sx={styles.links}>
           <ExternalLink type='github' link={item.github_link} />
           <ExternalLink type='website' link={item.website_link} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
