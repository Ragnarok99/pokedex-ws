import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #f6f7fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 500px;
  & + & {
    margin-top: 20px;
  }
`;

export const SearchSection = styled.section`
  background-color: white;
  border-radius: 12px;
`;

export const Title = styled.h1`
  font-size: 30px;
  padding-top: 200px;
`;
