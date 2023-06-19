import { Container, Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ mt: 25, minHeight: 600 }}>
      <Box>
        <Typography mb={4} variant="h3" align="center">
          About
        </Typography>
        <Typography align="center" variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          arcu eros. Quisque id leo ut sapien convallis faucibus. Suspendisse
          potenti. Donec ultricies risus ut purus mattis blandit. Aenean
          pharetra diam eu erat viverra, vel mattis massa fermentum. Nulla
          facilisi. Phasellus gravida fringilla lacus sed cursus. Suspendisse
          faucibus sagittis eros, eu consequat est semper ac. Sed convallis
          massa nec purus semper, ac fringilla enim consectetur.
        </Typography>
        <Typography align="center" variant="body1" paragraph>
          Fusce at lacinia urna. Integer vestibulum, nisl non sollicitudin
          commodo, risus mauris viverra dui, in tristique justo nisl vel purus.
          Praesent non ligula feugiat, interdum urna vel, commodo nisl.
          Curabitur placerat, nisi eget aliquam rutrum, enim turpis varius
          justo, in consequat enim neque et mi. Pellentesque consequat arcu nec
          metus aliquet, ut lacinia turpis consectetur.
        </Typography>
      </Box>
    </Container>
  );
}
