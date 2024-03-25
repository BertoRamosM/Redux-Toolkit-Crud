import { createSlice , PayloadAction} from '@reduxjs/toolkit'
// we can type the payload in redux thanks to Payload action

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Yazman Rodriguez",
    email: "yazmanito@gmail.com",
    github: "eclipsse",
  },
  {
    id: "2",
    name: "John Doe",
    email: "leo@gmail.com",
    github: "leonidas",
  },
  {
    id: "3",
    name: "Haakon Dahlberg",
    email: "haakon@gmail.com",
    github: "midudev",
  },
  {
    id: "4",
    name: "Emilio Ramos",
    email: "haakon@gmail.com",
    github: "emilio",
  },
  {
    id: "5",
    name: "Muki Ramos",
    email: "haakon@gmail.com",
    github: "dog",
  },
];

export type UserId = string

export interface User {
  name: string,
  email: string,
  github: string,
}

export interface UserWithId extends User{
  id: UserId
}


const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("reduxState")
  if (persistedState) {
    return JSON.parse(persistedState).users
  }
  return DEFAULT_STATE
})()



export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    //here we can pass the PayloadAction with the type we want to assign to our payload in our reducer
    deleteUserbyId: (state, action: PayloadAction <UserId>) => {

      //this comment on the bottom would be the way of tyyping the payload without the PayloadAction
      /*  { type: string, payload: UserId } */
      
      const id = action.payload;
      return state.filter((user)=> user.id !== id)
    }
  },
})

export default usersSlice.reducer

//the best way to use the reducer its to export the action, like so:
export const { deleteUserbyId } = usersSlice.actions
//then we can use this function in any component only by importing this