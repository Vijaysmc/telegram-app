

"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import OurProducts from "./components/Home/OurProducts";
import Disclaimer from "./components/Home/Disclaimer";
import OurResearch from "./components/Home/OurResearch";
import HomeBanner from "./components/Home/HomeBanner";

export default function HomePage() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
    
      if (width <= 1024) {
        setIsMobileOrTablet(true);
      } else {
        setIsMobileOrTablet(false);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  if (!isMobileOrTablet) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f5f5f5",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#333", fontWeight: 600, maxWidth: 400 }}
        >
          🚫 This page is available only on mobile and tablet devices.
        </Typography>
      </Box>
    );
  }

  return (
    <div className="h-full">
      <HomeBanner />
      <OurProducts />
      <OurResearch />
      <Disclaimer />
    </div>
  );
}
