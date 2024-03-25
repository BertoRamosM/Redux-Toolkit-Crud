import React from "react";
import { Button, Card, TextInput, Title } from "@tremor/react";

const CreateNewUser = () => {
  return (
    <Card className="py-16">
      <Title>Create new user</Title>

      <form action="" className="py-4">
        <TextInput placeholder="Name"></TextInput>
        <TextInput placeholder="Email"></TextInput>
        <TextInput placeholder="Github"></TextInput>
      </form>

      <Button type="submit" className="py-4">
      Create new user
      </Button>
    </Card>
  );
};

export default CreateNewUser;
