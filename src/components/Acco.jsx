// import { FaPlus } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Acco = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="max-w-[800px] mx-[20px] md:mx-auto mb-[100px]  ">
      <Accordion
        className="mb-5"
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className="text-center">
            What strategies do you employ to help roofing companies achieve
            consistent six-figure monthly revenue?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className="text-center">
            Our website design services are strategically crafted to drive
            business growth, incorporating lead generation tactics, SEO
            optimization, and conversion-focused design elements tailored
            specifically for roofing companies. By maximizing online visibility,
            generating qualified leads, and facilitating conversions, we empower
            roofing businesses to reach and exceed six-figure monthly revenue
            milestones.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="mb-5"
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className="text-center">
            How quickly can I expect to see results in terms of revenue growth
            after launching a website with your services?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className="text-center">
            While individual results may vary, many of our clients experience a
            noticeable uptick in revenue shortly after launching their new
            website. By leveraging our expertise in lead generation, conversion
            optimization, and SEO, roofing companies are well-positioned to
            attract more clients, close more deals, and ultimately achieve their
            financial goals, including consistent six-figure monthly revenue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="mb-5"
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className="text-center">
            Can you provide examples of roofing businesses that have achieved
            six-figure monthly revenue with your website design services?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography className="text-center">
            Absolutely! We have numerous success stories of roofing businesses
            that have seen significant revenue growth after partnering with us
            for their website design needs. From increased lead generation to
            improved conversion rates, our clients consistently attribute their
            success to our tailored approach and industry-specific expertise,
            resulting in consistent six-figure monthly revenue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="mb-5"
        expanded={expanded === "panel4"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            How do you ensure that my website design contributes to the
            financial success of my roofing business?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Our website design process is focused on delivering tangible results
            for our clients, including increased revenue and business growth. We
            employ data-driven strategies, user-centric design principles, and
            ongoing optimization techniques to maximize the effectiveness of
            your website in generating leads, converting prospects, and
            ultimately driving revenue, leading to consistent six-figure monthly
            income for your roofing business.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="mb-5"
        expanded={expanded === "panel5"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            What role does your ongoing support play in helping roofing
            companies maintain and grow their six-figure monthly revenue?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Our commitment to client success extends beyond the initial website
            launch. We provide ongoing support, performance monitoring, and
            strategic guidance to ensure that your website continues to perform
            optimally and contribute to the sustained growth of your roofing
            business. By proactively addressing challenges and identifying
            opportunities for improvement, we help our clients maintain and even
            surpass their six-figure monthly revenue goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="mb-5"
        expanded={expanded === "panel6"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel6")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            Do you offer customized solutions to address the unique needs and
            challenges of roofing businesses striving for six-figure monthly
            revenue?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            Absolutely! We understand that each roofing business is unique, with
            its own goals, target market, and competitive landscape. That's why
            we take a tailored approach to every project, crafting customized
            solutions that align with your specific objectives and position you
            for success in achieving consistent six-figure monthly revenue. From
            lead generation strategies to conversion optimization techniques,
            we're here to support your growth every step of the way.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="mb-5"
        expanded={expanded === "panel7"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel7")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            How do you measure the success of your website design services in
            terms of helping roofing companies achieve six-figure monthly
            revenue?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            We measure success based on tangible outcomes, including increased
            lead generation, improved conversion rates, and, most importantly,
            revenue growth. By tracking key performance indicators (KPIs) such
            as website traffic, lead quality, and sales revenue, we're able to
            demonstrate the direct impact of our website
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className=" max-w-[800px] mx-auto"></div>
    </div>
  );
};

export default Acco;
