import React from "react";
import BasicWebView from "../components/BasicWebView";

const HazardAlert = () => {
  return (
    <BasicWebView
      source={{
        uri: "https://tiktak-qa.metropolinet.co.il/#!form/201732361158450/15",
      }}
    ></BasicWebView>
  );
};

export default HazardAlert;
