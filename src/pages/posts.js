import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Meta from "../components/meta"

const PostsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Blog`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <h1>All posts</h1>
      {posts.map(post => (
        <article
          key={post.fields.slug}
          className="post-list-item"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h2>
              <Link to={post.fields.slug} itemProp="url">
                <span itemProp="headline">
                  {post.frontmatter.title || post.fields.slug}
                </span>
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
      ))}
    </Layout>
  )
}

export default PostsPage

export const Head = () => <Meta title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { date: { ne: null } } }
      sort: { frontmatter: { date: DESC } }
    ) {
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
