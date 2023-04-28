import { Title, Logout, HeadDiv } from "./style"
import Swal from "sweetalert2"
import { useUser } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const { logout, getFirstName } = useUser()

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Do you want to leave?',
      text: "Confirma o logout da aplicação?",
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        logout();
        navigate("/")
      }
    })
  }

  return (
    <>
    <HeadDiv>
      <Title>Welcome {getFirstName()}</Title>
      <Logout onClick={handleLogout}>Sair</Logout>     
    </HeadDiv>
      
    {/* <HeaderDiv>
    </HeaderDiv> */}
  </>
  )
}