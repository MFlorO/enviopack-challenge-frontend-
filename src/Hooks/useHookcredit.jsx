import { useUser } from "~/Hooks/useHookUser";
import { useUserContext } from "~/data/userContext";
import useHookShopping from "~/Hooks/useHookShopping";

const useHookcredit = () => {
  const {userState, setUserState} =  useUserContext() 
  const [, credit ] = useUser() 
 
  const creditFinal =  credit - useHookShopping() 
  console.log("creditFinal:", creditFinal)
  console.log("credit:", credit)
  console.log("useHookShopping:", useHookShopping())
  return creditFinal < 0 ? null  : setUserState({userState, credit:creditFinal} )
};

export default useHookcredit;
