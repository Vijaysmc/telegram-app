"use client";
import {
  Typography,
  Box,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import Image from "next/image";

const cardData = [
  {
    icon: "/images/sebi.png",
    iconBgColor: "#bbebd7a8",
    title: "SEBI Registered Advisory – Trade with confidence",
    bgImage: "/images/cuu_card_1.svg",
  },
  {
    icon: "/images/Telegram.png",
    iconBgColor: "#b9defb",
    title: "Instant updates delivered directly on Telegram",
    bgImage: "/images/cuu_card_2.svg",
  },
  {
    icon: "/images/research.png",
    iconBgColor: "#ffe6ca",
    bgImage: "/images/cuu_card_3.svg",
    title: "High-quality research for Stocks, Nifty & BankNifty",
  },
  {
    icon: "/images/trader.png",
    iconBgColor: "#fbdbdb",
    bgImage: "/images/cuu_card_4.svg",
    title: "Designed for retail traders & professionals",
  },
];

export default function Testimonial() {
  return (
    <>
      <Box sx={{ width: "100%", position: "relative" }}>
        <Box
          sx={{
            textAlign: "center",
            marginTop: { xs:8, sm: 3, md: 3 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#222448",
              fontSize: { xs: 25, sm: 40, md: 40 },
              marginBottom: { xs: 0, md: 3 },
            }}
          >
            Why Choose Us?
          </Typography>

          <Container
            maxWidth="lg"
            sx={{ py: { xs: 4 }, px: { xs: 2, sm: 3, md: 4 } }}
          >
            <Grid container spacing={{ xs: 2, sm: 3, md: 2 }}>
              {cardData.map((card, index) => (
                <Grid item xs={12} lg={3}  key={index}>
                  <Box
                    sx={{
                      borderRadius: 4,
                      border: "1px solid #E0E0E0",
                      p: { xs: 3, sm: 3, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      minHeight: { xs: "90px", sm: "80px", md: "140px" },
                      transition:
                        "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                      backgroundImage: `url(${card.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0px 10px 20px rgba(90, 89, 193, 0.11)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, sm: 60 },
                        height: { xs: 50, sm: 60 },
                        borderRadius: 2,
                        backgroundColor: card.iconBgColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: { xs: 2, sm: 3 },
                      }}
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={45}
                        height={45}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>

                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 500,
                        color: "#222448",
                        lineHeight:'27px',
                        mb: { xs: 1, sm: 1 },
                        fontSize: {
                          xs: "1.0rem",
                          sm: "1.25rem",
                          md: "1.25rem",
                        },
                        textAlign: "left",
                      }}
                    >
                      {card.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
