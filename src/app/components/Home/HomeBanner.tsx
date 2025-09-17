"use client";
import React from "react";
import {
  Typography,
  Box,
  CardContent,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import Image from "next/image";
import Mobile from "../Form/Mobile";

const imageUrl = "/images/stoxkart-logo.svg";
const altText = "stoxkart";

const HomeBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  const TypographyStyles = {
    my: { xs: 1, sm: 2 },
    fontSize: { xs: 12, sm: 16, md: 16 },
    fontWeight: 600,
    color: "#212322ff",
    lineHeight: "1.2",
    textAlign: "center",
    background: "#e4fee9",
    padding: "5px",
    width: { xs: "100%", md: "30%" },
    margin: "0px auto",
    borderRadius: "5px",
    border: "3px solid #a0e0bd",
    fontFamily: "Inter, sans-serif",
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        px: { xs: 0, sm: 2, md: 3 },
        py: { xs: 0, sm: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          py: { xs: 1, sm: 4, md: 6 },
          px: { xs: 1, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #eefaeaff 20%, #e8fcd5ff 90%);",
          position: "relative",
          borderRadius: "20px",
          boxShadow: `
    inset 0 2px 0 rgb(255, 255, 255), 
    inset 0 -2px 0 rgba(242, 248, 248, 0.3), 
    0 1px 2px rgba(241, 242, 245, 0.5)
  `,
        }}
      >
        <Box
          component="img"
          src="/images/06.svg"
          sx={{
            position: "absolute",
            left: -9,
            bottom: 0,
            width: { xs: "120px", sm: "150px", md: "180px" },
            zIndex: 0,
          }}
        />

        <Box
          component="img"
          src="/images/green-ltr.svg"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: { xs: "120px", sm: "150px", md: "300px" },
            zIndex: 0,
          }}
        />

        <Box
          component="img"
          src="/images/02.svg"
          sx={{
            position: "absolute",
            right: 3,
            bottom: 0,
            width: { xs: "120px", sm: "150px", md: "215px" },
            zIndex: 0,
          }}
        />

        <Box sx={{ width: "100%", position: "relative" }}>
          <CardContent>
            <Box
              sx={{
                mb: 3,
                ml: { xs: 0, md: 3 },
                display: { xs: "flex", md: "block" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Image src={imageUrl} width={230} height={80} alt={altText} />
            </Box>

            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                my: { xs: 1, sm: 2 },
                fontSize: { xs: 25, sm: 40, md: 40, lg: 55 },
                fontWeight: 700,
                color: "#1D1E20",
                lineHeight: { xs: "1.2" },
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Get SEBI-Registered <br /> Trading Calls on Telegram
              <br />
            </Typography>

            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                my: { xs: 1, sm: 2 },
                fontSize: { xs: 12, sm: 16, md: 16, lg: 16 },
                fontWeight: 600,
                color: "#0ba74f",
                lineHeight: "1.2",
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Box
                component="img"
                src="/images/tick.png"
                alt="Trusted Icon"
                sx={{
                  width: "19px",
                  height: "22px",
                  ml: 2,
                }}
              />
              Trusted by thousands of traders for timely, accurate, and
              compliant market insights.
            </Typography>

            <Typography variant={isMobile ? "h4" : "h3"} sx={TypographyStyles}>
              <Box
                component="img"
                src="/images/usertrus.png"
                alt="Trusted Icon"
                sx={{
                  width: "21px",
                  height: "20px",
                  ml: -3,
                  mt: 0,
                  position: "absolute",
                }}
              />
              Trusted by over 187K+ Subscribers
            </Typography>
          </CardContent>

          <Mobile isMainPage={true} />
        </Box>
      </Box>
    </Container>
  );
};

export default HomeBanner;
