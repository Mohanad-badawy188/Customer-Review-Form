import styled from "styled-components";
import FormPage from "./FormPage";

const Container = styled.div`
  min-height: 100vh;
`;
const HeaderContainer = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2600ffad;
`;
const Header = styled.div`
  text-align: center;
  font-size: 42px;
  color: white;
  font-weight: bold;
`;
const Wrap = styled.div`
  margin: 50px 70px;
  @media (max-width: 400px) {
    margin: 50px 20px;
  }
`;
const SubHeader = styled.div`
  margin: 40px auto;
  text-align: center;
  font-size: 26px;
  @media (max-width: 650px) {
    margin: auto;
  }
`;

function App() {
  return (
    <Container>
      <HeaderContainer>
        <Header>Customer Review Form</Header>
      </HeaderContainer>
      <Wrap>
        <SubHeader>
          Thank you for choosing us. We'd love to hear feedback from our
          customers.
          <br /> Please fill out the form below:
        </SubHeader>
        <FormPage />
      </Wrap>
    </Container>
  );
}

export default App;
