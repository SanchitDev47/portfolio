import React, { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton, Box } from "@mui/material";
import { theme } from "../theme";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 250) {
      setVisible(true);
    } else if (scrolled <= 250) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    
  window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      {visible && (
        <Box
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            borderRadius: "50%",
            px: 0.5,
            py: 0.5,
            backgroundColor: theme?.secondaryBlue,
          }}
        >
          <IconButton
            title="Back to top"
            onClick={scrollToTop}
            sx={{
              "&:hover": {
                backgroundColor: 'transparent',
              },
              color: theme?.primaryBlue,
            }}
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default ScrollButton;