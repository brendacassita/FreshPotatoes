import React from "react";
import { ReactDOM } from "react-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import BackToTopButton from "../shared/scroll/BackToTopButton";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Footer = () => {
  const { i18n, t } = useTranslation(["common"]);

  return (
    <footer className="footer">
      <Box
        // px={{ xs: 3, sm: 10}}
        // py={{ xs: 5, sm: 10}}
        bgcolor="#1F1D2B"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>{t("common:help")}</Box>
              <Box>
                <Link href="/contact_us" color="inherit">
                  {t("common:contactus")}
                </Link>
              </Box>
              <Box>
                <Link href="/about" color="inherit">
                  {t("common:aboutus")}
                </Link>
              </Box>
              <Box>
                <Link href="/privacy_policy" color="inherit">
                  {t("common:privacypolicy")}
                </Link>
              </Box>
              <Box>
                <Link href="/freshmeter" color="inherit">
                  What's the Freshmeter?&reg;
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>{t("common:account")}</Box>
              {/* <Box>
            <Link href="/login" color="inherit">
              Login
            </Link> 
        </Box> */}
              {/* <Box>
            <Link href="/register" color="inherit">
              Register
            </Link> 
        </Box> */}
              <Box>
                <Link href="/profile" color="inherit">
                  {t("common:profile")}
                </Link>
              </Box>
              <Box>
                <Link href="/edit_profile" color="inherit">
                  {t("common:editprofile")}
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>{t("common:pages")}</Box>
              <Box>
                <Link href="/" color="inherit">
                  {t("home:home")}
                </Link>
              </Box>
              <Box>
                <Link href="/popular_potatoes" color="inherit">
                  {t("common:popularpotatoes")}
                </Link>
              </Box>
              <Box>
                <Link href="/popular_fries" color="inherit">
                  {t("common:popularfries")}
                </Link>
              </Box>

              <Box>
                <Link href="/genres" color="inherit">
                  {t("common:genres")}
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Fresh Potatoes &reg; {new Date().getFullYear()}
            <Link href='https://www.themoviedb.org/documentation/api' style={{ color: '#EC4E20' }}><h3>Movie Data provided by TMDB</h3></Link>
            <BackToTopButton />
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
