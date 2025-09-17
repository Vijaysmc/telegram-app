import { Box, Typography, Grid, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PeopleIcon from "@mui/icons-material/People";
import CoffeeIcon from "@mui/icons-material/Coffee";

export default function WorkingProcess() {
  const steps = [
  {
    icon: <SendIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: <>Subscribe <br /> with  your details</>,
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: <>Join our <br /> Telegram Channel</>,
  },
  {
    icon: <CoffeeIcon sx={{ fontSize: 40, color: "#fff" }} />,
    title: <>Get <br /> Daily Updates</>,
  },
];

  return (
      <Container
      
            maxWidth="lg"
            sx={{ py: { xs: 4 }, px: { xs: 2, sm: 3, md: 4 } }}
          >
    <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#f9fafc", borderRadius:'20px', mt:4 }}>
     
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 6, color: "#222448",
              fontSize: { xs: 25, sm: 40, md: 40 }, }}
      >
       How It Works
      </Typography>

      <Grid container spacing={6} justifyContent="center" >
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ position: "relative" }}>
  <Box sx={{ mb: 2 }}>
    <Box
      sx={{
        width: 60,
        height: 60,
        borderRadius: 2,
        backgroundColor: "#43aa58",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {step.icon}
    </Box>
  </Box>


  <Typography
    variant="h6"
    sx={{
      fontWeight: 500,
      color: "#1D1E20",
      fontSize: "20px",
      lineHeight: "23px",
    }}
  >
    {step.title}
  </Typography>

  {index < steps.length - 1 && (
    <Box
      component="img"
      src="/images/Arrow.svg"
      alt="arrow"
      sx={{
        position: "absolute",
        right: "-110px",
        top: "60px",
        width: "190px",
        height: "auto",
        display: { xs: "none", sm: "block" },
      }}
    />
  )}
</Grid>

        ))}
      </Grid>
    </Box>
    </Container>
  );
}
