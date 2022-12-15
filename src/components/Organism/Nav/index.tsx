import React, { useState } from "react";
import * as S from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { HiCode } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";

export const Nav = () => {
  const [activeNow, setActiveNow] = useState("#");

  return (
    <S.Wrapper>
      {/* <div className="language-content">
        <span>PT</span>
      </div> */}
      <S.Link
        isActive={activeNow == "#" ? true : false}
        onClick={() => setActiveNow("#")}
        href="#"
      >
        <AiOutlineHome />
      </S.Link>
      <S.Link
        isActive={activeNow == "#about" ? true : false}
        onClick={() => setActiveNow("#about")}
        href="#about"
      >
        <AiOutlineUser />
      </S.Link>
      <S.Link
        isActive={activeNow == "#experience" ? true : false}
        onClick={() => setActiveNow("#experience")}
        href="#experience"
      >
        <BiBook />
      </S.Link>
      <S.Link
        isActive={activeNow == "#services" ? true : false}
        onClick={() => setActiveNow("#services")}
        href="#services"
      >
        <RiServiceLine />
      </S.Link>
      <S.Link
        isActive={activeNow == "#portfolio" ? true : false}
        onClick={() => setActiveNow("#portfolio")}
        href="#portfolio"
      >
        <HiCode />
      </S.Link>
      <S.Link
        isActive={activeNow == "#contact" ? true : false}
        onClick={() => setActiveNow("#contact")}
        href="#contact"
      >
        <AiOutlinePhone />
      </S.Link>
    </S.Wrapper>
  );
};
