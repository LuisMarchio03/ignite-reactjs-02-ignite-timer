import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Estudar ReactJS</td>
              <td>60 minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar NextJS</td>
              <td>60 minutos</td>
              <td>25/04/2021</td>
              <td>Andamento</td>
            </tr>
            <tr>
              <td>Estudar ReactJS</td>
              <td>60 minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar NextJS</td>
              <td>60 minutos</td>
              <td>25/04/2021</td>
              <td>Andamento</td>
            </tr>
            <tr>
              <td>Estudar ReactJS</td>
              <td>60 minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar NextJS</td>
              <td>60 minutos</td>
              <td>25/04/2021</td>
              <td>Andamento</td>
            </tr>
            <tr>
              <td>Estudar ReactJS</td>
              <td>60 minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar NextJS</td>
              <td>60 minutos</td>
              <td>25/04/2021</td>
              <td>Andamento</td>
            </tr>
            <tr>
              <td>Estudar ReactJS</td>
              <td>60 minutos</td>
              <td>Há 2 Meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Estudar NextJS</td>
              <td>60 minutos</td>
              <td>25/04/2021</td>
              <td>Andamento</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
