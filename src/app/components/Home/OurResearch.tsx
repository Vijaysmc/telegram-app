"use client";
import {
  Typography,
  Box,
  Container,
  Grid,
  Avatar,
} from "@mui/material";
import React from "react";



export default function OurResearch() {
  return (
    <>
    <Container
           maxWidth="lg"
          sx={{
            px: { xs: 0, sm: 2, md: 2 },
            py: { xs: 0, sm: 2, md: 2 },
          }}
        >
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
               marginBottom: { xs: 3, md: 3 },
            }}
          >
           Meet Our Research Team
          </Typography>

          <Box
      sx={{
          background: "linear-gradient(180deg, #eefaeaff 20%, #e8fcd5ff 90%);",
        py: { xs: 4, md: 3 },
        px: { xs: 2, sm: 4, md: 3 },
        borderRadius: "20px",
      }}
    >
      <Container>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
         
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Avatar
              src="/images/NITIN.png"
              alt="NITIN"
              sx={{
                width: { xs: 200, md: 260 },
                height: { xs: 200, md: 260 },
                borderRadius: 50,
                border:'2px solid #76a54c'
              }}
            />
          </Grid>

        
          <Grid item xs={12} md={8}>
            <Typography
                variant="body1"
              sx={{
                fontWeight: 400,
                color: "#222448",
                fontSize: { xs: 15, sm: 16, md: 20 },
                lineHeight: 1.4,
                textAlign:"left"
              }}
            >
              Mr. Nitin Murarka, professionally a Chartered Accountant (CA), is one of the well respected and widely followed Derivatives experts in India. He has experience of more than 2 decades in the domain of capital market especially in the Derivatives and Index Options trading; his specialization is index options trading and Data Interpretation that are used to determine the existence and strength of trends in the short term. He is a regular speaker on various news channels. He is famously known as “Nifty Ke Nishanebaz” among the investing community.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 3,
                fontWeight: 500,
                color: "#222448",
                 textAlign:"left",
                  fontSize: { xs: 13, sm: 16, md: 20 },
              }}
            >
              – CA NITIN MURARKA
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#797777ff",
                 textAlign:"left"
              }}
            >
              Head – Research (Derivatives)
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#797777ff",
                 textAlign:"left"
              }}
            >
              Enjoy the Live market Performance with CA Nitin Murarka
            </Typography>
          
          </Grid>
        </Grid>
      </Container>
    </Box>
        </Box>
      </Box>
      </Container>
    </>
  );
}
