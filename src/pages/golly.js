import * as React from "react";
import { graphql, Link } from "gatsby";

import Meta from "../components/meta";
import SocialMedia from "../components/SocialMedia";

const GollyPage = ({ data }) => {
  const title = data.site.siteMetadata.title;

  return (
    <div style={{ padding: '24px' }}>
      <header className="global-header">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <p style={{ marginBottom: '0', fontStyle: 'italic' }}>
          Golly is an exploration of{" "}
          <Link to="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
            Conway's Game of Life
          </Link>{" "}
          developed by Andrew Trevorrow, Tom Rokicki, Chris Rowett, and others.
        </p>
        <p style={{ marginBottom: '0', fontStyle: 'italic' }}>
          I'm in awe of both the complexity and orderliness that emerges from such simple rules.
        </p>
      </header>
      <main style={{ height: "80vh" }}>
        <iframe
          src="/golly/golly.html"
          title="Golly"
          width="100%"
          height="100%"
        />
      </main>
      <footer>
        <SocialMedia />
      </footer>
    </div>
  );
};

export const Head = () => <Meta title="Golly" />;

export default GollyPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
