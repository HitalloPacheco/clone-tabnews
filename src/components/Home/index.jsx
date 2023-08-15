import Lib from "../../icons/Lib";
import {
  Container,
  TextContainer,
  Title,
  SubTitle,
  IconContainer,
} from "./style";

const Home = () => {
  return (
    <Container>
      <IconContainer>
        <Lib />
      </IconContainer>
      <TextContainer>
        <Title>Eu não esqueci de você Pequena!</Title>
        <SubTitle>A sua aula hoje vai ser impressionantemente boa!</SubTitle>
        <SubTitle>🤓🤓🤓🤓</SubTitle>
      </TextContainer>
    </Container>
  );
};

export default Home;
