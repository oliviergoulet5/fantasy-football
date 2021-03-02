import Dropdown from '../components/Dropdown';
import { FormDropdownProps } from '../types';
import { Field } from 'formik';
import FormLabel from './FormLabel';

function FormDropdown({ name, errorMessage, options, setFieldValue }: FormDropdownProps) {

    return (
        <>
            <FormLabel name={ name } errorMessage={ errorMessage } />
            <Dropdown 
                options={ options } 
                liftSelectedOption={(selectedOption: string) => {
                    setFieldValue(name, selectedOption);
                }} 
            />
        </>
    );
}

export default FormDropdown;