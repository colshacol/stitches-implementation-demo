import * as React from "react";

import { Button } from "./components/Button";
import { Box } from "./components/Box";
import { Spacer } from "./components/Spacer";
import { styled, css } from "./stitches.config";

import * as Helpers from "./_helpers";

export default function App() {
  return (
    <Box direction="column">
      <Helpers.SectionHead>arrangeX="start"</Helpers.SectionHead>

      <Spacer height={6} />
      <Spacer height={6} />

      <Box isFullWidth arrangeX="start">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primary" isDisabled>
          Primary
        </Button>
      </Box>

      <Helpers.SectionHead>arrangeX="center"</Helpers.SectionHead>

      <Box isFullWidth arrangeX="center">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button disabled variant="primary">
          Primary
        </Button>
      </Box>

      <Helpers.SectionHead>arrangeX="between"</Helpers.SectionHead>

      <Box isFullWidth arrangeX="between">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button disabled variant="primary">
          Primary
        </Button>
      </Box>

      <Helpers.SectionHead>arrangeX="around"</Helpers.SectionHead>

      <Box isFullWidth arrangeX="around">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button disabled variant="primary">
          Primary
        </Button>
      </Box>

      <Helpers.SectionHead>arrangeX="evenly"</Helpers.SectionHead>

      <Box isFullWidth arrangeX="evenly">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button disabled variant="primary">
          Primary
        </Button>
      </Box>

      <Box isFullWidth direction="column" arrangeX="evenly">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button disabled variant="primary">
          Primary
        </Button>
      </Box>
    </Box>
  );
}
