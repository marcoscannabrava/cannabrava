import React from 'react'
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
    <img
      style={{height: '3em', width: '50%', marginLeft: 'auto', objectFit: 'contain', objectPosition: 'right'}}
    /> 
    : 
    item.title;
  

  function ExternalLink(props) {
    if (props.type === 'github' && props.link) {
      return (
        <a style={styles.textMuted} target="_blank" rel="noreferrer" href={props.link} className="card-text">
          <small className="text-muted"><FontAwesomeIcon icon={['fab', 'github']} />GitHub</small>
        </a>
      )
    } else if (props.type === 'website' && props.link) {
      return (
        <a style={styles.textMuted} target="_blank" rel="noreferrer" href={props.link} className="card-text">
          <small className="text-muted"><FontAwesomeIcon icon='external-link-alt' />Website</small>
        </a>
      )
    } else {
      return null
    }
  }

  return (
    <div className="grid-item" style={styles.gridItem}>
      <div className="card" style={styles.card}>
        <div style={{paddingTop: '1rem'}} dangerouslySetInnerHTML={{__html: item.banner}} />
        <div className="card-body" style={{padding: '0.5rem 1rem 0.75rem 1rem', borderTop: '1px solid rgba(0,0,0,0.3)'}}>
          <h5 className="card-title" style={{margin: '0'}}>
            {titleImage}
          </h5>
          <div className="card-text">
            <p style={{textAlign: 'justify'}}>{item.text}</p>
            <div style={{
              placeContent: 'center',
              display: 'flex',
              maxWidth: '100%', 
              flexWrap: 'wrap',
            }}>
              {tags.map((tag) => {
                return (
                  <div>
                    <img key={tag.publicURL} style={{height: '40px', marginRight: '12px'}} src={tag.publicURL} alt={tag.name} />
                    <div>{tag.name}</div>
                  </div>
                )})}
            </div>
          </div>
          <div className="card-links" style={styles.links}>
           <ExternalLink type='github' link={item.github_link} />
           <ExternalLink type='website' link={item.website_link} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
