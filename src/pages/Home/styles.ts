import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 500;

  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;

  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  color: ${({ theme }) => theme['gray-100']};

  font-size: 1.125rem;
  font-weight: 500;
  padding: 0 0.5rem;

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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

export const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;

  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  transition: 0.2s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['green-700']};
  }
`
