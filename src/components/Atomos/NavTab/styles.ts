import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  padding: 0.6rem 1.3rem;
  border: 1px solid ${props => props.isActive ? props.theme.color_primary : 'rgba(255, 255, 255, 0.15)'};
  background: ${props => props.isActive ? props.theme.color_primary : 'transparent'};
  color: ${props => props.isActive ? props.theme.color_white : props.theme.color_light};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  font-size: 0.85rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    font-size: 0.85rem;
  }

  &:hover {
    background: ${props => props.isActive ? props.theme.color_primary : 'rgba(255, 255, 255, 0.05)'};
    color: ${props => props.theme.color_white};
    border-color: ${props => props.theme.color_primary};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
    
    svg {
      font-size: 0.75rem;
    }
  }
`;
