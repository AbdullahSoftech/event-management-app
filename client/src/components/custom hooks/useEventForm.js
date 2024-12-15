import { useState } from 'react';

const useEventForm = (onSubmit) => {
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    return { formValues, handleChange, handleSubmit };
};

export default useEventForm;
