import { graphql, useStaticQuery } from "gatsby"

type NotesStaticQuery = {
  allMarkdownRemark: {
    nodes: NoteNode[];
  };
  allDirectory: {
    nodes: DirectoryNode[]
  }
  allFile: {
    nodes: { relativePath: string }[]
  }
}

export interface NoteNode {
  html: string;
  frontmatter: {
    title?: string;
    tags?: string;
  }
  tableOfContents?: string;
  fileAbsolutePath?: string;
  timeToRead?: number;
}

export interface DirectoryNode {
  relativePath: string;
  relativeDirectory: string;
  name: string;
}

const useNotesData = () => {
  return useStaticQuery<NotesStaticQuery>(graphql`
    query Notes {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/\/notes\/[^!]/"}}) {
        nodes {
          html
          frontmatter {
            title
            tags
          }
          tableOfContents
          fileAbsolutePath
          timeToRead
        }
      }
      allDirectory(filter: {absolutePath: {regex: "/notes\//"}}) {
        nodes {
          relativePath
          relativeDirectory
          name
        }
      }
      allFile(filter: {absolutePath: {regex: "/\/notes\/[^!].*.pdf/"}}) {
        nodes {
          relativePath
        }
      }
    }
  `)
}

export default useNotesData
