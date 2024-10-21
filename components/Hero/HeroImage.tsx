import Image from "next/future/image";
import _ from "lodash";
import { useEffect, useState } from "react";
import tw, { css, styled } from "twin.macro";

const ImgWrap = styled.span(() => [
  css`
    & img {
      ${tw`relative`}
      ${tw`bg-primary-tint-1`}
      ${tw`rounded-[20vw] blog-lg:rounded-[230px] w-[80vw] blog-lg:w-full h-auto`}
    }
  `,
]);

const HeroImage = () => {
  const [mdBreakpoint, setMdBreakpoint] = useState<boolean>(true);
  const debouncedResizeFn = _.debounce(() =>
    setMdBreakpoint(window.innerWidth >= 768)
  );

  useEffect(() => {
    if (window) {
      debouncedResizeFn();
      window.addEventListener("resize", debouncedResizeFn);
    }
    return () => window.removeEventListener("resize", debouncedResizeFn);
  }, [mdBreakpoint, debouncedResizeFn]);

  return (
    <div tw="blog-lg:w-3/5 h-auto mx-auto max-w-[450px] blog-lg:mx-0 blog-lg:w-4/5 blog-lg:h-full">
      <ImgWrap>
        {/* <Image
          priority={true}
          sizes="50vw"
          width="384"
          height="588"
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNjfL0r9iBtyiyJ0TXZRXZ5Kco3J3KzXYEA&s"}
          alt=""
        /> */}
      </ImgWrap>
    </div>
  );
};
export default HeroImage;
