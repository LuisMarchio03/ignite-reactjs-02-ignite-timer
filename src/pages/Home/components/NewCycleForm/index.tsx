import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CycleContext'
import { useFormContext } from 'react-hook-form'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        list="task-suggestions"
        id="task"
        placeholder="Ex: Estudar ReactJS"
        disabled={!!activeCycle}
        {...register('task')}
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
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        // error={!errors.minutesAmount?.message}
        {...register('minutesAmount')}
      />
      {/* <Error>{errors.minutesAmount?.message}</Error> */}

      <span>Minutos.</span>
    </FormContainer>
  )
}
