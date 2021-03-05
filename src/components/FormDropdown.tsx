import Dropdown from '../components/Dropdown';
import { FormDropdownProps } from '../types';
import { Field } from 'formik';
import FormLabel from './FormLabel';

function FormDropdown({ name, errorMessage, options, value, setFieldValue }: FormDropdownProps) {

    return (
        <div>
            <FormLabel name={ name } errorMessage={ errorMessage } />
            <Dropdown 
                options={ options }
                value={ value }
                liftSelectedOption={(selectedOption: string) => {
                    setFieldValue(name, selectedOption);
                }} 
            />
        </div>
    );
}

export default FormDropdown;