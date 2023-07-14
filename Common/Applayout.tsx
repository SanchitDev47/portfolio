import React, { } from "react";
import { Box } from "@mui/material";
import { theme } from "./theme";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
export default function AppLayout(props: any) {
  return (
    <div
      style={{
        display: "flex",
        // flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />
      <div
        style={{
          // marginTop: "10vh",
          width: "100%",
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "stretch",
        }}
      >
        <div
          style={{
            flex: 0.8,
            width: '100%',
            backgroundColor: "white",
            color:'black',
          }}
        >
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

