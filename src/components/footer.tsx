import { Box, Container } from "theme-ui"

const Footer = () => {
  return (
    <Box
      as="footer"
      variant="layout.footer"
      sx={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .35) 100%)`,
      }}
    >
      <Container>
        <div sx={{ display: `grid`, gridGap: 4, gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `2fr 1fr`] }}>
          <div
            sx={{
              p: { mb: 0 },
              h2: {
                mt: 0,
                mb: 1,
              },
            }}
          >
          </div>
        </div>
      </Container>
    </Box>
  )
}

export default Footer
