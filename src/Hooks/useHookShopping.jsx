import { useCar } from "~/Hooks/useHookUser";


const useHookShopping = () => {
  const [shopping] = useCar();

  let sumaTotal = shopping?.reduce((acc, { price }) => acc + price, 0);

  return sumaTotal;
};

export default useHookShopping;
