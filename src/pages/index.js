import * as React from "react"
import { Link, graphql } from "gatsby"

import Meta from "../components/meta"
import GameOfLife from "../components/GameOfLife"

const HIDDEN = ["/hello-world/", "/philosophy/"]

const Home = ({ data }) => {
  const { author, social } = data.site.siteMetadata
  const posts = data.allMarkdownRemark.nodes
    .filter(post => !HIDDEN.includes(post.fields.slug))
    .sort(
      (a, b) =>
        (b.frontmatter.date || "").localeCompare(a.frontmatter.date || "") ||
        a.frontmatter.title.localeCompare(b.frontmatter.title)
    )

  const elsewhere = [
    ["github", social.github],
    ["linkedin", social.linkedin],
    ["x", social.xtwitter],
    ["instagram", social.instagram],
    ["email", social.email],
    ["cv", social.curriculum],
  ]

  return (
    <>
      <GameOfLife />
      <main className="home">
        <h1>{author.name}</h1>
        <p className="muted">{author.summary.toLowerCase()}.</p>
        <p>
          I surf, read, and build tools.{" "}
          <Link to="/hello-world/">More about me →</Link>
        </p>

        <h2>writing</h2>
        <ul className="index">
          {posts.map(post => (
            <li key={post.fields.slug}>
              <span className="muted">{post.frontmatter.month || "notes"}</span>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </li>
          ))}
          <li>
            <span className="muted">toy</span>
            <Link to="/golly">Game of Life</Link>
          </li>
        </ul>

        <h2>elsewhere</h2>
        <p>
          {elsewhere.map(([label, href], i) => (
            <React.Fragment key={label}>
              {i > 0 && <span className="muted"> · </span>}
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </React.Fragment>
          ))}
        </p>
      </main>
    </>
  )
}

export default Home

export const Head = () => <Meta title="Marcos Cannabrava" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          github
          linkedin
          xtwitter
          instagram
          email
          curriculum
        }
      }
    }
    allMarkdownRemark {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
          month: date(formatString: "YYYY-MM")
        }
      }
    }
  }
`
