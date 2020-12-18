import * as React from "react";
import { styled, css } from "../stitches.config";

export const Box = styled("div", {
  display: "flex",

  variants: {
    isFullWidth: {
      true: {
        width: "100%"
      }
    },

    isInline: {
      true: {
        display: "inline-flex"
      }
    },

    isReverse: {
      true: {}
    },

    arrangeX: {
      center: {},
      start: {},
      end: {},
      between: {},
      around: {},
      evenly: {}
    },

    arrangeY: {
      center: {},
      start: {},
      end: {},
      between: {},
      around: {},
      evenly: {}
    },

    direction: {
      row: {
        flexDirection: "row"
      },
      column: {
        flexDirection: "column"
      }
    }
  }
});

Box.compoundVariant(
  {
    isReverse: true,
    direction: "column"
  },
  {
    flexDirection: "column-reverse"
  }
);

Box.compoundVariant(
  {
    isReverse: true,
    direction: "row"
  },
  {
    flexDirection: "row-reverse"
  }
);

Box.compoundVariant(
  {
    direction: "row",
    arrangeX: "center"
  },
  {
    justifyContent: "center"
  }
);

Box.compoundVariant(
  {
    direction: "row",
    arrangeX: "start"
  },
  {
    justifyContent: "flex-start"
  }
);

Box.compoundVariant(
  {
    direction: "row",
    arrangeX: "end"
  },
  {
    justifyContent: "flex-end"
  }
);

Box.compoundVariant(
  {
    direction: "row",
    arrangeX: "between"
  },
  {
    justifyContent: "space-between"
  }
);

Box.compoundVariant(
  {
    direction: "row",
    arrangeX: "around"
  },
  {
    justifyContent: "space-around"
  }
);

Box.compoundVariant(
  {
    direction: "row",
    arrangeX: "evenly"
  },
  {
    justifyContent: "space-evenly"
  }
);

Box.compoundVariant(
  {
    direction: "column",
    arrangeX: "center"
  },
  {
    alignItems: "center"
  }
);

Box.compoundVariant(
  {
    direction: "column",
    arrangeX: "start"
  },
  {
    alignItems: "flex-start"
  }
);

Box.compoundVariant(
  {
    direction: "column",
    arrangeX: "end"
  },
  {
    alignItems: "flex-end"
  }
);

Box.compoundVariant(
  {
    direction: "column",
    arrangeX: "between"
  },
  {
    alignItems: "space-between"
  }
);

Box.compoundVariant(
  {
    direction: "column",
    arrangeX: "around"
  },
  {
    alignItems: "space-around"
  }
);

Box.compoundVariant(
  {
    direction: "column",
    arrangeX: "evenly"
  },
  {
    alignItems: "space-evenly"
  }
);

Box.defaultProps = {
  isReverse: false,
  isInline: false,
  direction: "row",
  arrangeX: "start",
  arrangeY: "start",
  isFullWidth: false
};
