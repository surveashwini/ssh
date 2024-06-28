import React, { useEffect, useState } from 'react';

import Datatable from "@admin-hub/common/components/data-table/Datatable"
import FlexBox from '@admin-hub/common/styles/components/FlexBox';
import { SectionHeader, SectionTitle } from '@admin-hub/common/components/section-header/SectionHeader';
import { Button } from '@admin-hub/common/styles/components/Button';
import fetchServerResponse from '@admin-hub/common/api/api';
import { HttpMethod } from '@admin-hub/common/models/request-options';
import { useDialog } from '@admin-hub/common/components/dialog/DialogContext';
import Loader from '@admin-hub/common/components/loader/Loader';
import { Customer } from './Customer.model';
import { CUSTOMERS_API } from '@admin-hub/common/api/api-urls';
import { RefreshIcon } from '@admin-hub/common/styles/components/RefreshIcon';
import Confirmation from '@admin-hub/common/components/confirm/Confirmation';
import CustomerEditor from './components/customer-editor/CustomerEditor';

const CustomerPage = () => {
    const { openDialog, closeDialog } = useDialog();
    const [loader, setLoader] = useState(false);
    const [customers, setCustomers] = useState<Array<Customer>>([]);
    
    useEffect(() => {
        fetchCustomers();
    }, [])

    
    const fetchCustomers  = async () => {
        setLoader(true);
        let serverResponse = await (await fetchServerResponse(CUSTOMERS_API, { method: HttpMethod.GET })).json();
        setCustomers(serverResponse.map((customer: Customer) => ({ ...customer, elite: customer.elite ? 'Yes': 'No'})));
        setLoader(false);
    } 

    const handleSaveCustomer = () => {
        closeDialog();
        fetchCustomers();
    }

    const addCustomer = () => {
        openDialog(
            <CustomerEditor defaultFormValue={null} onSaveCustomer={handleSaveCustomer}/>
          );
    };

    const editCustomer = (id: number) => {
        const customerToEdit = customers.find(cust => cust.id === id);
        const defaultFormValue = { id: customerToEdit?.id || 0, name: customerToEdit?.name || '', elite: customerToEdit?.elite || false };
        openDialog(
            <CustomerEditor defaultFormValue={defaultFormValue} onSaveCustomer={handleSaveCustomer}/>
        );
    }

    const deleteCustomer = (id: number) => {
        openDialog(
           <Confirmation message={'Are you sure you want to delete?'} onUserSelection={(usrSelection: boolean)=> onCustomerDelete(usrSelection, id)} />
        )
    }

    const onCustomerDelete = async (userSelection: boolean, customerId: number) => {
        if(userSelection) {
            await fetchServerResponse(`${CUSTOMERS_API}${customerId}/`, { method: HttpMethod.DELETE });
            closeDialog();
            fetchCustomers();
        } else {
            closeDialog();
        }
    }

    return (
        <FlexBox flexdirection='column'>
           <SectionHeader>
                <div>
                    <SectionTitle>Customers</SectionTitle>
                </div>
                <FlexBox flexdirection='row' justifycontent='center' alignitems='center'>
                    <RefreshIcon onClick={fetchCustomers} />
                    <Button onClick={addCustomer}>Add Customer</Button>
                </FlexBox>
            </SectionHeader>
            { loader && <Loader />}
            { 
                !loader && 
                <Datatable 
                    data={customers} 
                    columns={["Name", "Elite"]} 
                    editable={true} 
                    deletable={true} 
                    onEdit={editCustomer}
                    onDelete={deleteCustomer}
                />
            }
        </FlexBox>
        
    )
}

export default CustomerPage;