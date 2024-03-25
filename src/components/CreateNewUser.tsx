import React, { useState } from "react";
import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import {useUserActions} from '../hooks/useUsersActions'

const CreateNewUser = () => {

  const {addUser}  = useUserActions()

  //we check if the result its ok with this local state
  const [result, setResult] = useState<'ok' | '!ok' | null>(null)

  //we have to type the event, lol
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setResult(null)

    const form = event.currentTarget
    const formData = new FormData(form)


    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string


    // here as we return, the function stops running
    if (!name || !email || !github) {
      return setResult('!ok')
    }


    addUser({ name, email, github })
    setResult('ok')
    //this cleans the form at the end!!
    form.reset()
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
        <span>
          {result === "ok" && (
            <Badge className="bg-green-400 size-10 px-6 mx-6 my-4">
              New User Added!
            </Badge>
          )}
          {result === "!ok" && (
            <Badge className="bg-red-500 size-12 px-6 mx-6 my-4">
              Error adding the user
            </Badge>
          )}
        </span>
      </form>
    </Card>
  );
};

export default CreateNewUser;
