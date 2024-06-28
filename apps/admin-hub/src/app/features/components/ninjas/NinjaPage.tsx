import React, { useEffect, useState } from 'react';

import Datatable from "@admin-hub/common/components/data-table/Datatable"
import FlexBox from '@admin-hub/common/styles/components/FlexBox';
import { SectionHeader, SectionTitle } from '@admin-hub/common/components/section-header/SectionHeader';
import { Button } from '@admin-hub/common/styles/components/Button';
import fetchServerResponse from '@admin-hub/common/api/api';
import { HttpMethod } from '@admin-hub/common/models/request-options';
import { useDialog } from '@admin-hub/common/components/dialog/DialogContext';
import Loader from '@admin-hub/common/components/loader/Loader';
import { Ninja } from './Ninja.model';
import { NINJAS_API } from '@admin-hub/common/api/api-urls';
import { RefreshIcon } from '@admin-hub/common/styles/components/RefreshIcon';
import Confirmation from '@admin-hub/common/components/confirm/Confirmation';
import NinjaEditor from './components/ninja-editor/NinjaEditor';

const NinjaPage = () => {
    const { openDialog, closeDialog } = useDialog();
    const [loader, setLoader] = useState(false);
    const [ninjas, setNinjas] = useState<Array<Ninja>>([]);
    
    useEffect(() => {
        fetchNinjas();
    }, [])

    
    const fetchNinjas  = async () => {
        setLoader(true);
        let serverResponse = await (await fetchServerResponse(NINJAS_API, { method: HttpMethod.GET })).json();
        setNinjas(serverResponse);
        setLoader(false);
    } 

    const handleSaveNinja = () => {
        closeDialog();
        fetchNinjas();
    }

    const addNinja = () => {
        openDialog(
            <NinjaEditor defaultFormValue={null} onSaveNinja={handleSaveNinja}/>
        );
    };

    const editNinja = (id: number) => {
        const NinjaToEdit = ninjas.find(ninja => ninja.id === id);
        const defaultFormValue = { id: NinjaToEdit?.id || 0, name: NinjaToEdit?.name || '', email: NinjaToEdit?.email || '', contact: NinjaToEdit?.contact || 0 };
        openDialog(
            <NinjaEditor defaultFormValue={defaultFormValue} onSaveNinja={handleSaveNinja}/>
        );
    }

    const deleteNinja = (id: number) => {
        openDialog(
           <Confirmation message={'Are you sure you want to delete?'} onUserSelection={(usrSelection: boolean)=> onNinjaDelete(usrSelection, id)} />
        )
    }

    const onNinjaDelete = async (userSelection: boolean, NinjaId: number) => {
        if(userSelection) {
            await fetchServerResponse(`${NINJAS_API}${NinjaId}/`, { method: HttpMethod.DELETE });
            closeDialog();
            fetchNinjas();
        } else {
            closeDialog();
        }
    }

    return (
        <FlexBox flexdirection='column'>
           <SectionHeader>
                <div>
                    <SectionTitle>Ninjas</SectionTitle>
                </div>
                <FlexBox flexdirection='row' justifycontent='center' alignitems='center'>
                    <RefreshIcon onClick={fetchNinjas} />
                    <Button onClick={addNinja}>Add Ninja</Button>
                </FlexBox>
            </SectionHeader>
            { loader && <Loader />}
            { 
                !loader && 
                <Datatable 
                    data={ninjas} 
                    columns={["Name", "Email", "Contact"]} 
                    editable={true} 
                    deletable={true} 
                    onEdit={editNinja}
                    onDelete={deleteNinja}
                />
            }
        </FlexBox>
        
    )
}

export default NinjaPage;