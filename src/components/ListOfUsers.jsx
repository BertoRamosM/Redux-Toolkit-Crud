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
import { useSelector } from 'react-redux';


export default function ListOfUsers() {
  const users = useSelector((state) => state.users)
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
            <TableRow key={item.workspace}>
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
                <button>
                  <DeleteIcon />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

