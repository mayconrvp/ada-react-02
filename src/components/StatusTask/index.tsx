
 

import { useMemo } from "react";
import { Task } from "../List";
import { Totalizers } from "./style";

interface StatusTaskProps { 
  listTasks: Task[]
}

const StatusTask = ({listTasks}: StatusTaskProps) => {

  const Status = useMemo(() => {
    const data = listTasks.reduce((previous, item) => {
      if (item.isConcluded === true) {
        return { complete: previous.complete + 1, progress: previous.progress }
      } else {
        return { complete: previous.complete, progress: previous.progress + 1 }
      }
    }, { complete: 0, progress: 0 })

    return <Totalizers>Total: {listTasks.length} - Concluidas: {data.complete} - Em progresso: {data.progress} </Totalizers>
  }, [listTasks])


    return (
      <p>{Status}</p>
    )
}

export { StatusTask }; 