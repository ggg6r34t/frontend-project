import { Grid } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import { Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";

const Root = styled.footer`
  background-color: #f87474;
  padding: 16px;
  margin-top: 30px;
  position: static;
  bottom: 0;
`;

const Title = styled(Typography)`
  margin-bottom: 16px;
  color: white;
`;

const IconButtonStyled = styled(IconButton)`
  margin-right: 16px;
  color: white;
  &:hover {
    color: lavender;
    background-color: transparent;
  }
`;

const SocialIconsContainer = styled(Grid)`
  margin-bottom: 16;
`;

function Footer() {
  return (
    <Root>
      <Title variant="h4">Wema</Title>
      <Typography sx={{ color: "white" }} variant="body1" component="p">
        &copy; {new Date().getFullYear()} Wema. All rights reserved.
      </Typography>
      <SocialIconsContainer container alignItems="center">
        <Grid item>
          <Link href="https://www.facebook.com/" target="_blank">
            <IconButtonStyled rel="noopener" aria-label="Facebook">
              <FacebookIcon />
            </IconButtonStyled>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://twitter.com/" target="_blank">
            <IconButtonStyled rel="noopener" aria-label="Twitter">
              <TwitterIcon />
            </IconButtonStyled>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://instagram.com/" target="_blank">
            <IconButtonStyled rel="noopener" aria-label="Instagram">
              <InstagramIcon />
            </IconButtonStyled>
          </Link>
        </Grid>
        <Grid item>
          <Link href="https://youtube.com/" target="_blank">
            <IconButtonStyled rel="noopener" aria-label="YouTube">
              <YouTubeIcon />
            </IconButtonStyled>
          </Link>
        </Grid>
      </SocialIconsContainer>
    </Root>
  );
}

export default Footer;
