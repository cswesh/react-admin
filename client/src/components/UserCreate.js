import React from 'react'
import {Create, SimpleForm, TextInput, EmailField} from 'react-admin'

export const UserCreate = (props) => {
    return (
        <Create title='Create a user' {...props}>
            <SimpleForm>
                <TextInput source='name'></TextInput>
                <TextInput source='email'></TextInput>
            </SimpleForm>
            
        </Create>
    )
}

export default UserCreate;