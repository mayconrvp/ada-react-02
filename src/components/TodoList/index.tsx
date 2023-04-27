import { Fragment, useEffect } from "react"
import { useUser } from "../../contexts/user.context"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { List } from "../List"
import { useNavigate } from "react-router-dom"
const TodoList = () => {
  const {user, validateUser} = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if(!validateUser(user)){
      console.log("Invalid User")
      navigate('/')  
    }
  },[])

  return (
    <Fragment>
      <Header />
      <List />
      <Footer />
    </Fragment>
  )
}

export default TodoList