import React from 'react'
import {Edit, SimpleForm, TextInput,EmailField} from 'react-admin'

export const UserEdit = (props) => {
    return (
        <Edit title='Edit the Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'></TextInput>
                <TextInput source='name'></TextInput>
                <TextInput  source='email'></TextInput>
            </SimpleForm>
            
        </Edit>
    )
}

export default UserEdit;