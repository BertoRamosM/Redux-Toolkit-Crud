import { configureStore } from '@reduxjs/toolkit';
import usersReducer from "./users/slice"
export const store = configureStore({
  reducer: {
   users: usersReducer
  },
})



// from where we get the types? from the store get state (initial state???), now this types its the userWithId

//store.getState its a function, we get the TYPE of the function and we return the type that returns the function (ReturnType)

// we can get this information from the documentation, we have to do it once and thats it. otherwise we would have to type the state in every component we export it from the store, 
// now we can simply import the RootState in each component
export type RootState = ReturnType<typeof store.getState>

//we can do the same with the diapatches:
//thanks to this we can check what action we can dispatch by checking his type
export type AppDispatch = typeof store.dispatch
//then we will import those two types inside the hook store.ts so we can create an easy function to call in the component and bring the types