import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 6px;
  position: relative;
  z-index: 1;
`;

export const Icon = styled.div`
  img {
    /* background-size: cover; */
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
`;

export const Menu = styled.div`
  position: absolute;
  bottom: -140px;
  width: 140px;
  background-color: white;
  border-radius: 6px;

  background-color: #069;
  padding: 6px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.color_primary};
  }
`;
