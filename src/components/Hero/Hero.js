import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, my name is João, But you can call me juniorjblp.
          I'm a C# and .NET developer from Brazil. 
          But sometimes I also love working with frontend & mobile development..
        </SectionText>
        <Button onClick={(e) => 
          window.open("https://github.com/juniorjblp", "_blank")}>
            <p style={{marginRight: 10}}>View my GitHub</p>  
          <AiFillGithub size="3rem" />
        </Button>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;
