/** @jsx jsx */
import { jsx } from "theme-ui"
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

//   const data = useStaticQuery(graphql`
//   query {
//     fileName: file(relativePath: { eq: "careconsult.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 300) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `)

  const styles = {
    links: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    textMuted: {
      fontSize: 0, 
      color: 'textMuted'}
  }

  let titleImage = img ? 
    <Img 
      imgStyle={{width: 'auto', objectFit: 'contain'}}
      style={{height: '3em'}}
      fluid={img.fluid} 
    /> 
    : 
    item.title;
  
  console.log('tags: ', tags)

  return (
    <div className="grid-item" 
    sx={{
      display: 'inline-block',
      width: ['100%', '50%', '50%', '33%', '33%', '25%'],
      padding: '1em'
    }}>
      <div className="card" 
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: `10px`,
          boxShadow: `0 3px 15px rgba(60, 60, 60, 0.3)`
        }}
      >
        <div dangerouslySetInnerHTML={{__html: item.banner}} />
        <div className="card-body"
          sx={{
            padding: '1.25rem'
          }}
        >
          <h5 className="card-title" sx={{textAlign: 'end'}}>
            {titleImage}
          </h5>
          <div className="card-text">
          <div dangerouslySetInnerHTML={{__html: item.text}}/>
            <br/><br/>
            {tags.map((tag) => {
              return (
                <img sx={{height: '40px'}} src={tag.publicURL} alt=""/>
              // <div key={tag} dangerouslySetInnerHTML={{__html: tag}}/>
              )
            })}
          </div>
          <div className="card-links" sx={styles.links}>
            <a sx={styles.textMuted} target="_blank" href={item.github_link} className="card-text"><small className="text-muted"><i className="fab fa-github"></i> Click to go to GitHub repo</small></a>
            <a sx={styles.textMuted} target="_blank" href={item.website_link} className="card-text"><small className="text-muted"><i className="fas fa-external-link-alt"></i> Click to go to Website</small></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
