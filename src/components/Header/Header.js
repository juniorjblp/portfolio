import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <>
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <img src="/logo.svg" height={30} width={30} /> 
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20, fontWeight: 'bold', color: '#00E88F' }} >juniorjblp</span>
        </a>
      </Link>
      </Div1>
        <Div2>
      <li>
        <Link href="#projects">
          <NavLink >Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#services">
          <NavLink>Services</NavLink>
        </Link>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/juniorjblp" target="_blank">
          <NavLink>Contact</NavLink>
        </a>
      </li>
      </Div2>
      <Div3>
      <SocialIcons href="https://github.com/juniorjblp" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/juniorjblp/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/juniorjblpd" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.twitter.com/juniorjblp" target="_blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      </Div3>
  </Container>
  </>
);

export default Header;
