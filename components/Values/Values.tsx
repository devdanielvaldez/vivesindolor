import tw from "twin.macro";
import { BaseContainer } from "../BaseStyle";
import { Heading } from "../Elements";
import Value from "./Value";

const Container = tw(BaseContainer)``;

const Values = (): JSX.Element => {
  return (
    <Container >
      <Heading as="h2" secondary>
        Analisis Quantico de Ultima Generación
      </Heading>
      <p tw="text-xl text-accent-555 mx-auto mb-20 max-w-prose">
        Con más de 20 años de experiencia y más de 5000 pacientes que ya no viven sin dolor, Manuel Cabrera y sus especialistas le ofrecen: Confianza, humanidad, buenos resultados.
      </p>
      <div tw="flex flex-col md:flex-row gap-12 justify-center md:gap-16">
        <Value name="confianza" shapePosition="left" />
        <Value name="calidad" shapePosition="center" />
        <Value name="humanidad" shapePosition="right" />
      </div>
    </Container>
  );
};

export default Values;
