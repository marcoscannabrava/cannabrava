import { graphql, useStaticQuery } from "gatsby"

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

const useProjectsData = () => {
  return useStaticQuery<ProjectsStaticQuery>(graphql`
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
}

export default useProjectsData
