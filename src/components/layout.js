import * as React from "react"
import { Link } from "gatsby"
import SocialMedia from "./SocialMedia"

const Layout = ({ location, title, subtitle, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <p>{subtitle}</p>
      </header>
      <main>{children}</main>
      <footer>
        <SocialMedia />
      </footer>
    </div>
  )
}

export default Layout
