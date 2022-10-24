import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            list="task-suggestions"
            id="task"
            placeholder="Ex: Estudar ReactJS"
          />

          <datalist id="task-suggestions">
            <option value="Estudar ReactJS" />
            <option value="Estudar NextJS" />
            <option value="Estudar NodeJS" />
            <option value="Estudar TypeScript" />
          </datalist>

          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="Ex: 60"
            step={5}
            min={5}
            max={60}
          />

          <span>Minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>

          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar ciclo
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
