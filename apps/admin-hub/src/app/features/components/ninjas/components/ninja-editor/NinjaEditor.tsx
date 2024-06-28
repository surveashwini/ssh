import React, { FormEvent, useState } from "react";
import { Ninja } from "../../Ninja.model";
import { Form, Label, Input, Checkbox, Button } from "./NinjaEditor.styled";
import fetchServerResponse from "@admin-hub/common/api/api";
import { HttpMethod } from "@admin-hub/common/models/request-options";
import { NINJAS_API } from "@admin-hub/common/api/api-urls";


const NinjaEditor = ({ defaultFormValue, onSaveNinja }: { defaultFormValue: Ninja | null, onSaveNinja: any}) => {
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const contact = formData.get('contact');
        
        await fetchServerResponse(defaultFormValue ? `${NINJAS_API}${defaultFormValue.id}/` : NINJAS_API, { method: defaultFormValue ? HttpMethod.PUT : HttpMethod.POST, headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({name, email, contact }) });
        onSaveNinja();
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Input type="text" defaultValue={defaultFormValue?.name || ''} name="name" autoComplete="off" />
  
        <Label>Email:</Label>
        <Input type="email" defaultValue={defaultFormValue?.email || ''} name="email" autoComplete="off" />
  
        <Label>Contact:</Label>
        <Input type="number" defaultValue={defaultFormValue?.contact || 0} name="contact" autoComplete="off" />
  
        <Button type="submit">Submit</Button>
      </Form>
    );
  };
  
  export default NinjaEditor;