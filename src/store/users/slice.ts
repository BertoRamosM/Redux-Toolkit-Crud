import { createSlice } from '@reduxjs/toolkit'

export interface User {
  name: string,
  email: string,
  github: string,
}

export interface UserWithId extends User{
  id: string
}


const initialState: UserWithId[] = [
 
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

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer