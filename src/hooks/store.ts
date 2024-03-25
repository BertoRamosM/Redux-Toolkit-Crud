import type { AppDispatch, RootState } from "../store";

import { useDispatch, useSelector } from "react-redux";


//TypedUseSelectorHook is a type definition provided by the react-redux library. It represents the type of the useSelector hook provided by React Redux. By importing this type, you can use it to annotate the return type of useSelector in your code.
import type { TypedUseSelectorHook } from "react-redux";


//useAppSelector its the recomended name from redux
// we use the hook from redux to give it the type RootState that we created in the users/index.ts
//and finally we give it the initial value of useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// we do the same with the dispatch (actions of our store)
export const useAppDispatch: ()=> AppDispatch = useDispatch