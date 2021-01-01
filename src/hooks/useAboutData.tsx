import { graphql, useStaticQuery } from "gatsby"

type AboutStaticQuery = {
  markdownRemark: {
    html: string
  }
}

const useAboutData = () => {
  return useStaticQuery<AboutStaticQuery>(graphql`
  query AboutMe {
    markdownRemark {
      html
    }
  }
`)
}

export default useAboutData
