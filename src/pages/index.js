import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Meta from "../components/meta"
import GameOfLife from "../components/GameOfLife"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Blog`
  const siteSubTitle = data.site.siteMetadata?.author.summary || ""

  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} subtitle={siteSubTitle}>
      <div>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <div key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section className="description">
                  <small
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </div>
          )
        })}
      </div>
      <div className="divider"></div>
      <GameOfLife />
      <i>
        <Link to="golly">Life is the fight against entropy.</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="quotes">quotes</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="philosophy">philosophy</Link>
      </i>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Meta title="Marcos Cannabrava" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author {
          summary
        }
      }
    }
    # allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "Hello World" } } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
