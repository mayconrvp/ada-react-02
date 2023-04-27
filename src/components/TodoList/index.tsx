import { useEffect } from "react"
import { useUser } from "../../contexts/user.context"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { List } from "../List"
import { useNavigate } from "react-router-dom"
export const TodoList = () => {
  const {user, validateUser} = useUser();
  const navigate = useNavigate();
  console.log(user)
  useEffect(() => {
    if(!validateUser(user)){
      console.log("Invalid User")
      navigate('/')  
    }
  },[])

  return (
    <>
      <Header />
      <List />
      <Footer />
    </>
  )
}