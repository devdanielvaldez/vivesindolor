import React, { useRef, useEffect } from "react";
import tw, { styled } from "twin.macro";
import { Button } from "../Elements";
import NavLink from "./NavLink";
import { animated } from "react-spring";

// @ts-ignore
const Container = styled(animated.nav)(
  ({ device }: { device: "mobile" | "desktop" }) => [
    tw`w-full px-8 pb-5 list-none bg-primary-tint-3 shadow-sm z-[-1]`,
    tw`lg:relative lg:w-auto lg:p-0 lg:h-24 lg:shadow-none lg:z-10`,

    device === "mobile" && tw`lg:hidden`,
    device === "desktop" && tw`hidden lg:flex`,
  ]
);
const StyledNavList = styled.ul(() => [
  tw`flex flex-col list-none`,
  tw`lg:flex-row lg:items-center`,
]);

const Nav = ({
  setHeight,
  style,
  device,
  toggle,
}: {
  setHeight?: any;
  style?: {};
  device: "mobile" | "desktop";
  toggle: any;
}): JSX.Element => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (setHeight) {
      setHeight(navRef?.current?.clientHeight || 0);
    }
  }, [navRef?.current?.clientHeight, setHeight]);

  return (
    <Container ref={navRef} style={style} device={device}>
      <StyledNavList>
        <NavLink nextLink destination="/servicios" toggle={toggle}>
          Servicios
        </NavLink>
        <NavLink destination="#footer" toggle={toggle}>
          Contáctanos
        </NavLink>


        <div tw="h-[1.2px] bg-[#e3e3e2] mt-5 mb-10 lg:hidden" />
        <li tw="pb-5 lg:pb-0" onClick={() => toggle(false)}>
          <Button elType="text" nav cta href="https://cal.com/vive-sin-dolor-c6yjok">
            Reserva una cita
          </Button>
        </li>

      </StyledNavList>
    </Container>
  );
};
export default Nav;
