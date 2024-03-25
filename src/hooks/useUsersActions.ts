import { deleteUserbyId } from "../store/users/slice";
import { useAppDispatch } from "./store";
import { UserId } from "../store/users/slice";

export const useUserActions = () => {
   const dispatch = useAppDispatch();

   const handleRemoveUser = (id: UserId) => {
     dispatch(deleteUserbyId(id));
  };
  
  return {handleRemoveUser}
}