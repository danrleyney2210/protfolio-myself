import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as S from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { HiCode } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { FiFeather } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

export const Nav = () => {
  const [activeNow, setActiveNow] = useState("#");
  const [isMoreOpen, setIsMoreOpen] = useState(false);

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
      <S.DesktopOnly>
        <S.Link
          isActive={activeNow == "#contact" ? true : false}
          onClick={() => setActiveNow("#contact")}
          href="#contact"
        >
          <AiOutlinePhone />
        </S.Link>
        <S.Link as={RouterLink} to="/blog" isActive={false}>
          <FiFeather />
        </S.Link>
      </S.DesktopOnly>

      <S.MoreWrapper>
        <S.MoreButton
          isActive={isMoreOpen}
          onClick={() => setIsMoreOpen((prev) => !prev)}
          aria-label="More options"
        >
          <BsThreeDots />
        </S.MoreButton>

        {isMoreOpen && (
          <S.SubMenu>
            <S.SubItem as={RouterLink} to="/blog" onClick={() => setIsMoreOpen(false)}>
              <FiFeather />
            </S.SubItem>
            <S.SubItem href="#contact" onClick={() => setIsMoreOpen(false)}>
              <AiOutlinePhone />
            </S.SubItem>
          </S.SubMenu>
        )}
      </S.MoreWrapper>

      {isMoreOpen && <S.Overlay onClick={() => setIsMoreOpen(false)} />}
    </S.Wrapper>
  );
};
