import { Box, Typography, Link, Container } from "@mui/material";

export default function Disclaimer() {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 4 }, px: { xs: 2, sm: 3, md: 4 } }}
    >
      <Box
        sx={{
          py: 1,
          px: 2,
          textAlign: "center",
          backgroundColor: "#f9fafc",
          borderRadius: "10px",
        }}
       >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            mb: 1,
            color: "rgb(34, 36, 72)",
            fontSize: { xs: 13, sm: 16, md: 16 },
            textAlign: "left",
          }}
          >
          Stoxkart
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            mb: 2,
            color: "#808080",
            fontSize: { xs: 12, sm: 14, md: 14 },
            textAlign: "left",
            lineHeight: "1.6",
          }}
        >
          Moneywise Finvest Limited | 11/6B Shanti Chamber, Pusa Road, New Delhi
          - 110005, Tel. No. 1800 11 3331, 011-40820400, 71333666, Email:{" "}
          <Link
            href="mailto:stoxkart@stoxkart.com"
            underline="hover"
            color="primary"
          >
            stoxkart@stoxkart.com
          </Link>{" "}
          | CIN No.: U67100UP2009FLC088874 | SEBI Reg. No. INZ000196835 |
          Member: NSE: EQ, FO, CDS, COM, DEBT (90161) | BSE: EQ, FO, CDS, COM,
          DEBT (6690) | MCX: COM (56325) | Mutual Funds Distributor ARN No.
          156808.
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
 mb: 2,
            color: "#808080",
            fontSize: { xs: 12, sm: 14, md: 14 },
            textAlign: "left",
            lineHeight: "1.6",
          }}
        >
          We do not share client details with any third party and do not sell
          any tips or recommendations. In case anyone calls you posing as a
          Moneywise Finvest Limited executive, offering/inducing you to trade,
          please send us an email at contact@stoxkart.com.
        </Typography>

         <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            mb: 1,
            color: "rgb(34, 36, 72)",
            fontSize: { xs: 13, sm: 16, md: 16 },
            textAlign: "left",
          }}
          >
          Disclaimer:
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            mb: 2,
            color: "#808080",
            fontSize: { xs: 12, sm: 14, md: 14 },
            textAlign: "left",
            lineHeight: "1.6",
          }}
        >
         Investments in securities market are subject to market risks, read all the related documents carefully before investing. Mutual Fund investments are subject to market risks, read all scheme related documents carefully. PMS is not offered in commodity derivative segment. Insurance is the subject matter of solicitation. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The securities quoted are for illustration only and are not recommendatory.
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,

            color: "#808080",
            fontSize: { xs: 12, sm: 14, md: 14 },
            textAlign: "left",
            lineHeight: "1.6",
          }}
        >
        Trading and Investment involve risk. All such information is for assistance only and shall not be taken as the sole basis for making any Trading/investment decisions. The risk of loss in trading / investment in Securities markets including Equites, Derivatives, commodity and Currency can be substantial. Before Trading/ investing in the asset class consider your investment objectives, level of experience and risk appetite carefully. By submitting your details to Stoxkart, you are authorizing us to send promotional communication through Call/Email/SMS/Whatsapp even though you may be registered under DND. Caution to clients availing research services through telegram channel (Clients) =  
        <Link href="https://www.stoxkart.com/telegram-channel-advisory-for-investors" underline="hover" color="primary" target="_blank">
           https://www.stoxkart.com/telegram-channel-advisory-for-investors
          </Link>{" "}
        </Typography>
      </Box>
    </Container>
  );
}
