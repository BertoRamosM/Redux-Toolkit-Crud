import React from "react";
import { Button, Card, TextInput, Title } from "@tremor/react";
import {useUserActions} from '../hooks/useUsersActions'

const CreateNewUser = () => {

  const {addUser}  = useUserActions()

  //we have to type the event, lol
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)


    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string


    addUser(name, email, github)
  }

  return (
    <Card className="py-16">
      <Title>Create new user</Title>

      <form onSubmit={handleSubmit} className="py-4">
        <TextInput placeholder="Name" name="name"></TextInput>

        <TextInput placeholder="Email" name="email"></TextInput>

        <TextInput placeholder="Github" name="github"></TextInput>

        <Button type="submit" className="py-4">
          Create new user
        </Button>
      </form>
    </Card>
  );
};

export default CreateNewUser;
