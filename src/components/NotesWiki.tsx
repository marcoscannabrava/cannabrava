/** @jsx jsx */
import React, {useState} from "react";
import { Link } from "gatsby";
import { jsx, Box } from "theme-ui";
import useNotesData, {NoteNode, DirectoryNode} from "../hooks/useNotesData";
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faUmbrellaBeach)

const umbrella = icon({ prefix: 'fas', iconName: 'umbrella-beach' })

export interface IFSObject {
  name: string;
  path: string;
  parent: IFSObject | '';
  children?: IFSObject[];
  content?: NoteNode;
}

class FileSystem {
  public root: IFSObject;

  constructor(fs: IFSObject[]) {
    this.root = {
      name: 'root',
      parent: '',
      children: fs ? fs : [],
      path: ''
    };
  }

  rootFrom(path: string) {
    return path.slice(0, path.indexOf('/'));
  }

  traversePath(path: string) {
    let pathDirs = path.split('/');
    let currFolder = this.root;
    for (let  i = 0; i < pathDirs.length; i++) {
      for (let child of currFolder.children) {
        if (pathDirs[i] == child.name) {
          currFolder = child;
          break;
        }
      }
      return {
        name: pathDirs[i],
        parent: currFolder,
        children: [],
        path: pathDirs
      }
    }
  }

  // public findDFS(name: string, root: IFSObject=this.rootDir[0]) {
  //   return this.fileIndex.includes(name);
  // }

  public findBFS(name: string) {
    let queue = [];
    for (let fsObj of this.root.children) {

      if ('children' in fsObj) {

      }
    }
  }

  public add(element: IFSObject) {
    if (element.parent === '') {
      return this.root.children.push(element);
    } else {
      let rootDir = this.rootFrom(element.path);
      for (let fsObj of this.root.children) {
        if (fsObj.name == rootDir) {
          
        }
      }
    }
  }
}

const NotesWiki = () => {
  const [currNote, setCurrNote] = useState<NoteNode | undefined>();
  const {allMarkdownRemark, allDirectory, allFile } = useNotesData();
  const notes = allMarkdownRemark.nodes;
  const pdfs = allFile.nodes;
  const folders = allDirectory.nodes;

  function folderIndex (directories, mdFiles, pdfFiles) {
    let filesystem = [];

    for (let folder of directories) {
      if (folder['relativeDirectory'] === '') filesystem.push({[folder['name']]: []})
    }

    return (
      <details>
        <summary>Details</summary>
        Something small enough to escape casual notice.
      </details>
    )
  }


  return (
    <Box as='main' variant='layout.wiki'>
      <Box sx={{ gridArea: 'header' }}>
        <h1>My Notes</h1>
      </Box>
      <Box as='article' sx={{ gridArea: 'main' }}>
        {currNote ?
          <div dangerouslySetInnerHTML={{ __html: currNote.html }} />
          : <FontAwesomeIcon icon='umbrella-beach'size='10x' style={{margin: '4rem'}}/>
        }
      </Box>
      <Box as='aside' sx={{ gridArea: 'nav' }}>
        {
          folders.map((folder) => {
            return (
              <details>
                <summary>Details</summary>
                Something small enough to escape casual notice.
              </details>
            )
          })
        }
        <details>
          <summary>other</summary>
          Something small enough to escape casual notice.
        </details>
      </Box>
      <Box as='aside' sx={{ gridArea: 'ads' }}>
        Ads
      </Box>
      <Box as='footer' sx={{ gridArea: 'footer' }}>
        Footer
      </Box>
    </Box>
  )
}

export default NotesWiki
