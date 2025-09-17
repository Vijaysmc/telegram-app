import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Paper,
  Checkbox,
  FormControlLabel,
  Typography,
  LinearProgress,
} from "@mui/material";

function Mobile({}: { isMainPage?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // ✅ Updated validation logic
  const validateMobileNumber = (number: string) =>
    /^[6-9][0-9]{9}$/.test(number);

  const isFormValid =
    name.trim() !== "" && validateMobileNumber(phone.trim()) && isChecked;

  const handleSubmit = () => {
    setIsSubmitting(true);
    setCountdown(3);
  };

  useEffect(() => {
    if (isSubmitting && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (isSubmitting && countdown === 0) {
      window.location.href = "https://telegram.me/+6dTq1EOWL2NhNDc1";
    }
  }, [isSubmitting, countdown]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          filter: isSubmitting ? "blur(5px)" : "none",
          transition: "filter 0.3s ease",
        }}
      >
        <Paper
          sx={{
            padding: 3,
            borderRadius: 4,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 15, sm: 16, lg: 25 },
              color: "#2f2d2dff",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Join Now & Get Free Access
          </Typography>

          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              sx: {
                height: "50px",
              },
            }}
          />

          <TextField
            fullWidth
            label="Your phone number"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => {
              const input = e.target.value.replace(/\D/g, ""); 
              setPhone(input);
            }}
            error={phone !== "" && !validateMobileNumber(phone)}
            helperText={
              phone !== "" && !validateMobileNumber(phone)
                ? "Enter a valid 10-digit phone number"
                : ""
            }
            InputProps={{
              sx: {
                height: "50px",
              },
              inputProps: {
                maxLength: 10,
                inputMode: "numeric",
                pattern: "[0-9]*",
              },
            }}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                sx={{
                  color: "#48c875",
                  "&.Mui-checked": {
                    color: "#48c875",
                  },
                }}
              />
            }
            label={
              <Typography
                variant="body2"
                sx={{ fontSize: "0.675rem", color: "#777" }}
              >
                I agree to the Terms & Conditions.
              </Typography>
            }
          />

          <Button
            fullWidth
            variant="contained"
            disabled={!isFormValid || isSubmitting}
            onClick={handleSubmit}
            sx={{
              marginTop: "16px",
              py: 1.4,
              borderRadius: "10px",
              background: "linear-gradient(to right, #48c875ff, #067e28ff)",
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              border: "2px solid #fff",
            }}
          >
            Join Now
          </Button>
        </Paper>
      </Box>

      {isSubmitting && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Box sx={{ width: "80%", maxWidth: "500px" }}>
            <LinearProgress
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#ddd",
                "& .MuiLinearProgress-bar": { backgroundColor: "#48c875" },
              }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              mt: 3,
              fontWeight: 600,
              color: "#48c875",
              textAlign: "center",
            }}
          >
            Wait Redirecting to Telegram {countdown}...
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default Mobile;
