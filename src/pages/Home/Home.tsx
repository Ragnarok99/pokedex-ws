import { Container, Content, SearchSection, Title } from "./Home.styles";
import { SearchInput } from "../../components/SearchInput";

export const Home = () => {
  return (
    <Container>
      <Content>
        <SearchSection>
          <Title>What pokemon are you looking for?</Title>
          <SearchInput />
        </SearchSection>
      </Content>
    </Container>
  );
};
