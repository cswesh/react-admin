import React from 'react'
import {List, Datagrid, TextField, EmailField, EditButton, DeleteButton} from 'react-admin' 

const UserList = (props) =>{
    return <List {...props}>
        <Datagrid>
            <TextField source="id"></TextField>
            <TextField source="name"></TextField>
            <EmailField source="email"></EmailField>
            <EditButton basePath='/posts'></EditButton>
            <DeleteButton basePath='/posts'></DeleteButton>
        </Datagrid>
    </List>
}

export default UserList;