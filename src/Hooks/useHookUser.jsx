
//Creo este hook para consumir los datos del context
import { useUserContext } from "~/data/userContext";



export const useUser = () => {
	const {userState:{ firstName, credit, shopping }} =  useUserContext() 
	                                                                     
	return [firstName, credit, shopping]
}


export const useCar = () => {
	const {userState:{ shopping }, addCar, deleteCar} =  useUserContext() 
	                                                           
	return [shopping, addCar, deleteCar]
}

