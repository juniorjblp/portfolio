import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { service: 'UI Design', text: 'I design the interface so that it is clear, objective and, above all, intuitive for the user.' },
  { service: 'Development', text: 'Developer of professional websites, blogs, portfolios, landing pages and e-commerce, desktop applications, mobile applications.', },
  { service: 'Motion', text: "I create interactions that convey a sense of modernity, as well as attracting the user's attention.", },
  { service: 'Versioning', text: 'Code and application versioning with Github actions and Github projects.', }
];

const Acomplishments = () => (
  <Section id="services">
    <SectionTitle>My services .</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.service.toLocaleString('en-IN')}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
