import { useState } from "react";
import tw, { styled, css } from "twin.macro";
import Image from "next/image";
import { Text, useDisclosure } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { VscClose } from "react-icons/vsc";

import { BaseContainer as Container } from "@/components/BaseStyle";
import { Button } from "@/components/Elements";
import withScrollMotion from "@/components/HOCS/withScrollMotion";
import SEO from "@/components/SEO";
import { WEB_LINK } from "@/static/ts/constants";
import { Divider } from "@/components/Blog/layout";
import Filter from "@/components/Blog/Filter";
import { Heading } from "@/components/Elements";
import CallToAction from "@/components/CallToAction";
import { Section } from "../pages";
import { ADDRESS } from "@/static/ts/constants";

interface Content {
  title: string;
  category: string;
  coverImage: string;
  icon: string;
  description?: string;
  details?: React.ReactNode;
}
const CATEGORIES: Array<{ title: string }> = [
  "Consulta",
].map((el) => ({ title: el }));

const Ul = tw.ul`ml-5 mb-4 md:mb-6 list-disc`;
const Ol = tw.ol`ml-5 mb-4 md:mb-6 list-decimal`;
const Li = ({ children }: { children: React.ReactNode }) => (
  <>
    <li tw="mb-1 text-[#525252] text-base md:text-lg leading-[1.575rem] tracking-[0.02px] font-normal max-w-[75ch] md:leading-[1.875rem]">
      {children}
    </li>
  </>
);
const SERVICES_CONTENT: Array<Content> = [
  {
    title: "Consulta quantica presencial",
    category: "Consulta",
    coverImage: "consulta-medica-presencial.jpg",
    icon: "clinic.png",
    description: `Reciba atencion personalizada en cualquiera de nuestros centros a nivel nacional`,
    details: (
      <>
        <Ul>
          <Li>Puede pedir su cita en línea o en un centro</Li>
        </Ul>
      </>
    ),
  },
  {
    title: "Telemedicina",
    category: "Consulta",
    coverImage: "telemedicina.jpg",
    icon: "smartphone.png",
    description:
      "Valoramos su tiempo asi que le damos la opcion de tener una videollamada con nuestro especialista para evaluar su situacion.",
    details: (
      <>
        <Ol>
          <Li>Pida su cita en línea</Li>
          <Li>Seleccione el día y la hora que mejor se ajuste a su horario</Li>
          <Li>Acceda a una videollamada con su especialista en el día pactado</Li>
        </Ol>
      </>
    ),
  },
];
const FILTERED_SERVICES_CONTENT: Record<string, Content[]> =
  SERVICES_CONTENT.reduce((filtered, service) => {
    if (filtered[service.category]) {
      filtered[service.category]?.push(service);

      return {
        ...filtered,
      };
    }
    return {
      ...filtered,
      [service.category as string]: [service],
    };
  }, {} as Record<string, Content[]>);

const StyledHeading = tw(
  Heading
)`w-full text-center my-12 text-[1.625rem] leading-[2.125rem] text-primary-shade-3 md:my-20 md:text-4xl md:leading-[2.875rem]`;
const Title = ({ children }: { children: React.ReactNode }) => (
  <StyledHeading as="h1" primary>
    {children}
  </StyledHeading>
);

const CoverWrap = styled.div(() => [
  tw`rounded-md overflow-hidden w-full h-full h-[clamp(250px, 25vh, 400px)]`,
  css`
    & > span {
      ${tw`rounded-md`}
    }
  `,
]);
const LogoWrap = styled.div(() => [
  tw`absolute top-full left-1/2 translate-x-[-50%] translate-y-[-50%]`,
  tw`w-24 h-24 bg-center bg-no-repeat bg-contain p-7`,
  css`
    background-image: url("../static/img/shapes/center-bubble.png");
  `,
]);
const ModalImgWrap = styled.div(() => [
  tw`h-full overflow-hidden `,
  css`
    & > span {
      & > img {
        ${tw`rounded-t-md! mob-me:rounded-t-none! mob-me:rounded-l-md!`}
      }
    }
  `,
]);

export const Service = ({ content }: { content: Content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        onClick={onOpen}
        tw="p-4 hover:cursor-pointer hover:translate-y-[-5px] transition ease-in-out duration-300"
      >
        <div tw="relative mb-16">
          <CoverWrap>
            <Image
              src={`/img/services/cover/${content.coverImage}`}
              alt={`${content.title}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </CoverWrap>
          <LogoWrap>
            <Image
              src={`/img/services/icons/${content.icon}`}
              alt={`${content.icon.split(".")[0]} icon`}
              layout="responsive"
              sizes="5vw"
              width="1"
              height="1"
            />
          </LogoWrap>
        </div>
        <div tw="text-center">
          <Heading subHeading as="span" tw="mb-5 md:mb-[1.5rem]">
            {content.category}
          </Heading>
          <Heading tertiary as="h2" tw="text-2xl md:text-3xl mb-4 md:mb-5">
            {content.title}
          </Heading>
          {content.description && (
            <Text tw="text-sm md:text-base leading-6 mb-4 md:mb-6 text-accent-555">
              {content.description}
            </Text>
          )}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="scale"
        variant={{ base: "base", lg: "lg", xl: "xl" }}
      >
        <ModalOverlay />
        <ModalContent overflow="hidden relative ">
          <Button
            elType="icon"
            tw="absolute right-3 top-3 z-10 w-10 xl:w-14 xl:h-14 h-10 p-2"
            onClick={onClose}
            Icon={() => (
              <>
                <VscClose />
              </>
            )}
          />
          <ModalBody
            p={0}
            tw="grid grid-rows-2 mob-me:grid-rows-1 mob-me:grid-cols-2 p-0 min-h-[30vh] lg:min-h-[40vh] max-h-[85vh]"
          >
            <div tw="relative">
              <ModalImgWrap>
                <Image
                  src={`/img/services/cover/${content.coverImage}`}
                  alt={`${content.title}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </ModalImgWrap>
              <LogoWrap tw="w-20 h-20 p-6 blog-lg:p-7 blog-lg:w-24 blog-lg:h-24 top-3 left-6 translate-x-0 translate-y-0">
                <Image
                  src={`/img/services/icons/${content.icon}`}
                  alt={`${content.icon.split(".")[0]} icon`}
                  layout="responsive"
                  sizes="5vw"
                  width="1"
                  height="1"
                />
              </LogoWrap>
            </div>
            <div tw="rounded-b-md mob-me:rounded-b-none mob-me:rounded-r-md overflow-hidden relative">
              <div tw="ml-12 pr-16 xl:pr-20 pt-8 pb-20 overflow-y-scroll max-h-[45vh] mob-me:max-h-[85vh]">
                <Heading subHeading as="span">
                  {content.category}
                </Heading>
                <Heading secondary as="h2" tw="mb-6">
                  {content.title}
                </Heading>
                {content.description && (
                  <Text tw="text-base md:text-lg mb-4 md:mb-6 leading-6 text-accent-555">
                    {content.description}
                  </Text>
                )}
                <>{content.details}</>
                <div tw="absolute left-12 bottom-0 bg-white w-[80%]">
                  <Button elType="text" nav cta href="https://cal.com/vive-sin-dolor-c6yjok" tw="m-6 ml-0 mt-0">
                    Reserva una cita
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const CustomTabPanel = ({ children }: { children: React.ReactNode }) => {
  return (
    <div tw="grid gap-8 mob-me:grid-cols-2 blog-lg:grid-cols-3 p-0">
      {children}
    </div>
  );
};

const Services = () => {
  const AnimatedTitle = withScrollMotion({ Element: Title });
  const [crrTab, setCrrTab] = useState<string>("Servicios");

  return (
    <SEO
      description={
        "Empresa dedicada a la prevención, atención y recuperación de patologías que afectan al sistema músculo esquelético. Contamos con especialistas altamente capacitados. Separa citas, recibe tratamiento, prescripciones y haz consultas a tu medico todo desde nuestra plataforma en linea."
      }
      image={`${WEB_LINK}/img/osteocenter-logo.png`}
      title="Servicios | Clínica Osteocenter"
      keywords={
        "consulta medica presencial, teleconsultas, atencion a domicilio, procedimientos, terapia con ondas de choque, protesis de cadera, cirugia artroscopica de rodilla, cirugia de tumores oseos y musculares, cirugia reconstructiva y estetica, tratamiento de secuelas y deformidades oseas, ortopedia infantil, emergencias, tratamiento de lesiones deportivas"
      }
    >
      <Container tw="mt-0">
        <AnimatedTitle>{crrTab}</AnimatedTitle>
        <Divider tw="mb-20" />

        <div tw="mb-20 md:mb-24 blog-lg:mb-[7.5rem]">
          <Filter
            categories={[{ title: "Todos" }, ...CATEGORIES]}
            elements={SERVICES_CONTENT}
            filteredElements={FILTERED_SERVICES_CONTENT}
            Component={Service}
            CustomTabPanel={CustomTabPanel}
            setCrrTab={setCrrTab}
          />
        </div>
      </Container>

      <Section cta>
        <CallToAction />
      </Section>
    </SEO>
  );
};

export default Services;
