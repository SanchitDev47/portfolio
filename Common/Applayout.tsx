import React from "react";
import { Box } from "@mui/material";
import { theme } from "./theme";
import Header from "./UI/header";
import Footer from "./UI/footer";
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
            
            display: "flex",
            flex: 1,
            flexDirection: "column",
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

