
import React from 'react';

const SparklesIcon = (props) => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    React.createElement("path", { d: "m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3z" }),
    React.createElement("path", { d: "M5 3v4" }),
    React.createElement("path", { d: "M19 17v4" }),
    React.createElement("path", { d: "M3 5h4" }),
    React.createElement("path", { d: "M17 19h4" })
  )
);

export default SparklesIcon;