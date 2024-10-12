import React from "react";
import SortStyle from "./Sort.style";
import { Accordion, AccordionSummary, Box } from "@mui/material";

type Props = {};

const SortList = (props: Props) => {
  return (
    <SortStyle>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpendMoreIcon />}></AccordionSummary>
        </Accordion>
      </Box>
    </SortStyle>
  );
};

export default SortList;
