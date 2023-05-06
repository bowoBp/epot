import {useState} from 'react';

export const useform = (initialvalues) => {
  const [values, setValues] = useState(initialvalues);
  return [
    values,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setValues(initialvalues);
      }
      return setValues({...values, [formType]: formValue});
    },
  ];
};
