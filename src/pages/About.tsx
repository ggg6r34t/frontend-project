import { Container, Box, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function About() {
  const themeMode = useSelector((state: RootState) => state.themes.mode);

  return (
    <Container
      sx={{
        mt: 25,
        minHeight: 600,
        background: themeMode === "dark" ? "black" : "white",
      }}
    >
      <Box>
        <Typography
          mb={4}
          variant="h3"
          align="center"
          sx={{ color: themeMode === "dark" ? "white" : "black" }}
        >
          About
        </Typography>
        <Typography
          align="center"
          variant="body1"
          paragraph
          sx={{ color: themeMode === "dark" ? "white" : "black" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut
          arcu eros. Quisque id leo ut sapien convallis faucibus. Suspendisse
          potenti. Donec ultricies risus ut purus mattis blandit. Aenean
          pharetra diam eu erat viverra, vel mattis massa fermentum. Nulla
          facilisi. Phasellus gravida fringilla lacus sed cursus. Suspendisse
          faucibus sagittis eros, eu consequat est semper ac. Sed convallis
          massa nec purus semper, ac fringilla enim consectetur.
        </Typography>
        <Typography
          align="center"
          variant="body1"
          paragraph
          sx={{ color: themeMode === "dark" ? "white" : "black" }}
        >
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
