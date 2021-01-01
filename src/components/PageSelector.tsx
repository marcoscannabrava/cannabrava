/** @jsx jsx */
import { Box, jsx, Styled } from "theme-ui"
import theme from '../gatsby-plugin-theme-ui'

const PageSelector = () => {
  const pages = [
    { title: `My Notes`, href: "notes", file: "notebook.png" }
  ]

  return (
    <Box
      sx={{
        position: 'absolute',
        right: 40,
        bottom: 60,
        textAlign: 'center'
      }}
    >
      {pages.map((entry) => (
        <Styled.a key={entry.title} href={entry.href}>
          <img src={entry.file} alt={entry.title} 
            sx={{
              height: '40px',
              transition: `all .2s ease-in-out`,
              "&:hover": { transform: `scale(1.5)` }
            }}
          />
          <p sx={{my: 1, color: theme.colors.text}}>My Notes</p>
        </Styled.a>
      ))}
    </Box>
  )
}

export default PageSelector
