import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Meta from "../components/meta";
import GameOfLife from "../components/GameOfLife";

function Post({ post, small }) {
  return <div>
    <article className={`post-list-item ${small ? 'text-sm' : ''}`}>
      <header>
        <h2>
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline">{post.frontmatter.title || post.fields.slug}</span>
          </Link>
        </h2>
        <small>{post.frontmatter.date}</small>
      </header>
      <section className="description">
        <small
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description" />
      </section>
    </article>
  </div>;
}

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Blog`;
  const siteSubTitle = data.site.siteMetadata?.author.summary || "";

  const helloWorldPost = data.helloWorld.nodes[0];
  const latest = data.latest.nodes[0];

  return (
    <Layout location={location} title={siteTitle} subtitle={siteSubTitle}>
      <div className="first-row">
        <Post post={helloWorldPost} />
        <div>
          <small><i>latest post&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="all">all</Link></i></small>
          <Post post={latest} small />
        </div>
      </div>
      <div className="divider"></div>
      <GameOfLife />
      <i>
        <Link to="golly" title="exploring cellular automata">Life is a fight against entropy.</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="quotes">quotes</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="philosophy">philosophy</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="all">all</Link>
      </i>
    </Layout>
  );
};

export default Home;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Meta title="Marcos Cannabrava" />;

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
    helloWorld: allMarkdownRemark(filter: { frontmatter: { title: { eq: "Hello World" } } }) {
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
    latest: allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1) {
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
`;
