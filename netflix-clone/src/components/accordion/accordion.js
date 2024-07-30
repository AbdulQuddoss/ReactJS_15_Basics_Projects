import React from "react";
import "./accordion.css";
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordions = () => {
  return (
    <div className="accordion-container">
      <Typography
        variant="h3"
        component="h2"
        align="center"
        color="white"
        fontWeight="bold"
        paddingTop="2rem"
        paddingBottom="2rem"
      >
        Frequently Asked Questions
      </Typography>
      <Container maxWidth="sm">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is Netflix</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Netflix is a subscription-based streaming service that allows our
              members to watch TV shows and movies without commercials on an
              internet-connected device. You can also download TV shows and
              movies to your iOS, Android, or Windows 10 device and watch
              without an internet connection.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is Netflix</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Netflix is a subscription-based streaming service that allows our
              members to watch TV shows and movies without commercials on an
              internet-connected device. You can also download TV shows and
              movies to your iOS, Android, or Windows 10 device and watch
              without an internet connection.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
};

export default Accordions;
