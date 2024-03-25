import { addNewUser, deleteUserbyId } from "../store/users/slice";
import { useAppDispatch } from "./store";
import { UserId } from "../store/users/slice";

export const useUserActions = () => {
   const dispatch = useAppDispatch();

   const handleRemoveUser = (id: UserId) => {
     dispatch(deleteUserbyId(id));
  };
  

  const addUser = (name, email, github) => {
    dispatch(addNewUser({name, email, github}))
  }
  return {handleRemoveUser, addUser}
}