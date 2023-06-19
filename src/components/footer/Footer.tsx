import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";

import { textColorActions } from "../../redux/slices/textColor";

const Root = styled.footer`
  background-color: #080202;
  height: 165px;
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
  &:hover {
    color: #c92c6d;
    background-color: transparent;
  }
`;

const SocialIconsContainer = styled(Grid)`
  margin-bottom: 16;
`;

function Footer() {
  const dispatch = useDispatch();

  const handleDefaultColor = () => {
    dispatch(textColorActions.clearTextFormatting());
  };

  return (
    <Root>
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to="/"
        onClick={handleDefaultColor}
      >
        <Title variant="h4">WEMA</Title>
      </Link>
      <Typography sx={{ color: "white" }} variant="body1" component="p">
        &copy; {new Date().getFullYear()} Wema. All rights reserved.
      </Typography>

      <SocialIconsContainer
        style={{ marginTop: 55 }}
        container
        alignItems="center"
      >
        <Grid item>
          <Link to="https://www.facebook.com/" target="_blank">
            <IconButtonStyled
              sx={{ color: "white" }}
              rel="noopener"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButtonStyled>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://twitter.com/" target="_blank">
            <IconButtonStyled
              sx={{ color: "white" }}
              rel="noopener"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButtonStyled>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://instagram.com/" target="_blank">
            <IconButtonStyled
              sx={{ color: "white" }}
              rel="noopener"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButtonStyled>
          </Link>
        </Grid>
        <Grid item>
          <Link to="https://youtube.com/" target="_blank">
            <IconButtonStyled
              sx={{ color: "white" }}
              rel="noopener"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </IconButtonStyled>
          </Link>
        </Grid>
      </SocialIconsContainer>
    </Root>
  );
}

export default Footer;
