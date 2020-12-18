import * as React from "react";
import { styled, css } from "../stitches.config";

export const Spacer = styled("div", {
  display: "inline-flex",

  variants: {
    width: {
      0: {
        width: "$0"
      },
      1: {
        width: "$1"
      },
      2: {
        width: "$2"
      },
      3: {
        width: "$3"
      },
      4: {
        width: "$4"
      },
      5: {
        width: "$5"
      },
      6: {
        width: "$6"
      },
      full: {
        width: "100%"
      }
    },

    height: {
      0: {
        height: "$0"
      },
      1: {
        height: "$1"
      },
      2: {
        height: "$2"
      },
      3: {
        height: "$3"
      },
      4: {
        height: "$4"
      },
      5: {
        height: "$5"
      },
      6: {
        height: "$6"
      },
      full: {
        height: "100%"
      }
    }
  }
});
