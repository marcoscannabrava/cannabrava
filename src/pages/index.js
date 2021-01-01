import React from "react"
import Projects from "../components/Projects"
import SEO from "../components/SEO.tsx"

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faExternalLinkAlt)

const IndexPage = () => (
  <>
    <SEO />
    <Projects />
  </>
)

export default IndexPage
