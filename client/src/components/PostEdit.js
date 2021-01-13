import React from 'react'
import {Edit, SimpleForm, TextInput,DateInput} from 'react-admin'

export const PostEdit = (props) => {
    return (
        <Edit title='Edit the Post' {...props}>
            <SimpleForm>
                <TextInput disabled source='id'></TextInput>
                <TextInput source='title'></TextInput>
                <TextInput multiline source='body'></TextInput>
                <DateInput label='Published' source='publishedAt'></DateInput>
            </SimpleForm>
            
        </Edit>
    )
}

export default PostEdit;