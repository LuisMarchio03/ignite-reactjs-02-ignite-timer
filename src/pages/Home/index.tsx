import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormSchema = zod.object({
  task: zod
    .string()
    .min(1, 'Informe a tarefa')
    .max(50, 'Máximo de 50 caracteres'),
  minutesAmount: zod
    .number()
    .min(5, 'Mínimo de 5 minutos')
    .max(60, 'O máximo de minutos é 60'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormSchema>

export function Home() {
  const {
    register,
    handleSubmit,
    watch,
    // formState: { errors },
    reset,
  } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            list="task-suggestions"
            id="task"
            placeholder="Ex: Estudar ReactJS"
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
            step={5}
            min={5}
            max={60}
            // error={!errors.minutesAmount?.message}
            {...register('minutesAmount')}
          />
          {/* <Error>{errors.minutesAmount?.message}</Error> */}

          <span>Minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>

          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={!isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar ciclo
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
