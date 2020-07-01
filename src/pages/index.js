import React from "react"
import Projects from "../components/projects"

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faExternalLinkAlt)

const IndexPage = () => (
  <Projects />
)

export default IndexPage
