import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title, 
  Badge
} from '@tremor/react';
import DeleteIcon from './DeleteIcon';
import EditIcon from './EditIcon';


// here we import the hook to type the users
import { useAppSelector } from '../hooks/store';
import { useUserActions } from '../hooks/useUsersActions';

export default function ListOfUsers() {

  //here we use the useApp selector that types the users state
  const users = useAppSelector((state) => state.users)


  //this is not a recomended way to use it, because we show the underlying of our logic, the best way to deal with this is by passing the logic to custom hooks, and then executing the hook. In this case we have created the hook useUserActions to store all the logic.
  /* const dispatch = useAppDispatch()

  const handleRemoveUser = (id: UserId) => {
    dispatch(deleteUserbyId(id))
  } */


  //that would be the correct way of using it
  const { handleRemoveUser } = useUserActions()



  return (
    <>
      <div className='flex align-center gap-6'>
        <Title>Users</Title>
        <Badge className='rounded-full'>{users.length}</Badge>
      </div>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10"></div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Email
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Actions
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell className="flex gap-6 items-center">
                <img
                  src={`https://unavatar.io/github/${item.github}`}
                  alt={item.name}
                  className="size-8"
                ></img>
                {item.name}
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell className="flex gap-2">
                <button>
                  <EditIcon />
                </button>
                <button onClick={()=> handleRemoveUser(item.id)}>
                  <DeleteIcon/>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

