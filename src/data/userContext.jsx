import { useEffect, useState, createContext, useContext } from "react";
import profile from "~/api/profile.json" 


export const UserContext = createContext({})


export const UserProvider = ({ children }) =>{

  const [userState, setUserState] = useState({}) 

  useEffect(() => {
    setUserState({...profile.profile, shopping: JSON.parse(localStorage.getItem("carrito")) || []} )
  }, [])


  useEffect(() => {

    if(userState.shopping !== undefined) {
     
      localStorage.setItem("carrito", JSON.stringify(userState.shopping))
    }
    if(userState.credit !== undefined) {
      localStorage.setItem("credit", JSON.stringify(userState.credit))
    }
  },[userState.shopping, userState.credit]);


  //FUNCIONES
  
  const addCar = (obj) => setUserState({...userState,shopping: userState.shopping.concat(obj)})
  
  const deleteCar = (objId) => {
    const filtercar = JSON.parse(localStorage.getItem("carrito"))
    const resultado = filtercar.filter( s => s.id !== objId) 
    setUserState({...userState,shopping: resultado})
  }

  const countCredit = () =>{
    let sumaTotalCarrito = userState.shopping?.reduce((acc, { price }) => acc + price, 0);
    const creditResult = JSON.parse(localStorage.getItem("credit")) 
    const resultaoFinal = creditResult - sumaTotalCarrito

    setUserState({...userState,credit: resultaoFinal, shopping: [] } )   
  }

  
  return <UserContext.Provider value={{ userState, setUserState, addCar, deleteCar, countCredit }}>{children}</UserContext.Provider>
}


export const useUserContext = () => {   

  const Context = useContext(UserContext);

  if (Context === undefined){
    throw Error('Esta fuera del contexto')
  }

  return Context;
}