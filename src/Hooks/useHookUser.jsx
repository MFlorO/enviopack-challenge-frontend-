
//Creo este hook para consumir los datos del context
import { useUserContext } from "~/data/userContext";



export const useUser = () => {
	const {userState:{ firstName, credit, shopping }, setUserState} =  useUserContext() 
	                                                                     
	return [firstName, credit, shopping, setUserState]
}


export const useCar = () => {
	const {userState:{ shopping }, addCar, deleteCar, setCar, countCar} =  useUserContext() 
	                                                           
	return [shopping, addCar, deleteCar, setCar, countCar]
}
