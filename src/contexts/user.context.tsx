import { createContext, useState, useEffect, useContext } from "react";


interface IUserContext {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  saveUser: (user: IUser) => void;
  logout: () => void;
  validateUser: (user: IUser) => boolean
}

interface IUser {
  name: string;
  email: string;
  age: string;
}
const UserContext = createContext<IUserContext>({} as IUserContext);

interface IProps {
  children: React.ReactNode
}

const UserProvider = (({children }: IProps) => {
  const [user, setUser] = useState<IUser>({name: '', email: '', age: ''});
  
  useEffect(() => {
    const fetchUser = () => {
      const userString = localStorage.getItem('user');
      if(userString) {
        const userData = JSON.parse(userString);
        setUser(userData);
      }
    }
    
    fetchUser();
  }, []);
  
  const saveUser = (user: IUser) => {
    setUser(user)
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
  }

  const logout = () => {
    localStorage.setItem('user', '');
  }

  const validateUser = (user: IUser): boolean => {
    if(user.name.trim() === '' || user.email.trim() === '' || parseInt(user.age) < 16){
      return false;
    }
    return true
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        saveUser, 
        logout,
        validateUser
      }}
    >
      {children}
    </UserContext.Provider>
)
})

const useUser = () => useContext(UserContext);

export { UserProvider, useUser }