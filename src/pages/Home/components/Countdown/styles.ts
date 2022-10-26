import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font: 400 10rem 'Roboto Mono', monospace;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;

  color: ${({ theme }) => theme['green-500']};
  overflow: hidden;

  display: flex;
  justify-content: center;
`
