import { useEffect, useState, createContext, useContext } from "react";
import profile from "~/api/profile.json" 


export const UserContext = createContext({})


export const UserProvider = ({ children }) =>{

  const [userState, setUserState] = useState({}) 

  useEffect(() => {
    setUserState( {...profile.profile, shopping: JSON.parse(localStorage.getItem("carrito")) || []})
  }, [])

  useEffect(() => {
    if(userState.shopping !== undefined) {
      localStorage.setItem("carrito", JSON.stringify(userState.shopping))
    }
  },[userState.shopping]);
    
  const addCar = (obj) => setUserState({...userState,shopping: userState.shopping.concat(obj)})
  

  const deleteCar = (objId) => {
    const filtercar = JSON.parse(localStorage.getItem("carrito"))
    const resultado = filtercar.filter( s => s.id !== objId) 
    setUserState({...userState,shopping: resultado})
  }

  const seteCar = () => setUserState({userState,shopping: []})
 

  const countCar = () => JSON.parse(localStorage.getItem("carrito"))?.length

  
  return <UserContext.Provider value={{ userState,setUserState, addCar, deleteCar, seteCar, countCar }}>{children}</UserContext.Provider>
}


export const useUserContext = () => {   

  const Context = useContext(UserContext);

  if (Context === undefined){
    throw Error('Esta fuera del contexto')
  }

  return Context;
}