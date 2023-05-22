import React, { } from "react";
import Header from "./UI/Header";
import { Box } from "@mui/material";
import { theme } from "./theme";
export default function AppLayout(props: any) {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />
      <div
        style={{
          // marginTop: "10vh",
          width: "100%",
          // display: "flex",
          flex: 1,
          // flexDirection: "row",
          // justifyContent: "stretch",
        }}
      >
        <div
          style={{
            flex: 0.8,
            backgroundColor: "white",
            color:'black',
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}

