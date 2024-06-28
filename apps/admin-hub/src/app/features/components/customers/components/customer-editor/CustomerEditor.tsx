import React, { FormEvent, useState } from "react";
import { Customer } from "../../Customer.model";
import { Form, Label, Input, Checkbox, Button } from "./CustomerEditor.styled";
import fetchServerResponse from "@admin-hub/common/api/api";
import { HttpMethod } from "@admin-hub/common/models/request-options";
import { CUSTOMERS_API } from "@admin-hub/common/api/api-urls";


const CustomerEditor = ({ defaultFormValue, onSaveCustomer }: { defaultFormValue: Customer | null, onSaveCustomer: any}) => {
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name');
        const elite = formData.get('elite');
        
        await fetchServerResponse(defaultFormValue ? `${CUSTOMERS_API}${defaultFormValue.id}/` : CUSTOMERS_API, { method: defaultFormValue ? HttpMethod.PUT : HttpMethod.POST, headers: {
          'Content-Type': 'application/json'
        }, body: JSON.stringify({"name": name,"elite": elite ? true : false }) });
        onSaveCustomer();
    };
  
    return (
      <Form onSubmit={handleSubmit}>
        <Label>First Name:</Label>
        <Input type="text" defaultValue={defaultFormValue?.name || ''} name="name" autoComplete="off" />
  
        <Label>Elite:</Label>
        <Checkbox type="checkbox" name="elite" defaultChecked={defaultFormValue?.elite || false} />
  
        <Button type="submit">Submit</Button>
      </Form>
    );
  };
  
  export default CustomerEditor;