import React, { useEffect, useState } from 'react';
import { FormTextAreaProps } from '../types';
import FormLabel from './FormLabel';

function FormTextArea({ name, errorMessage, placeholder, setFieldValue }: FormTextAreaProps) {
    const [ text, setText ] = useState('');
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    };

    useEffect(() => {
        setFieldValue(name, text);
    }, [text]);

    return (
        <>
            <FormLabel name={name} errorMessage={ errorMessage } />
            <textarea 
                className='fg-item px-2 py-1 w-full h-36' 
                placeholder='Maximum of 500 words' 
                value={ text }
                onChange={ handleChange }
            />
        </>
    );
}

export default FormTextArea;