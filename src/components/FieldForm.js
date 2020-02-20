import React from 'react';
import { useField } from 'react-final-form-hooks';


const useFieldsFrom = (init,form) => {
const _useFields = {}
_useFields.agreementName = useField('agreementName', form);
_useFields.commissionType = useField('commissionType', form);
_useFields.checkbox = useField('checkbox', form);
_useFields.spinButton =  useField('spinButton', form)
_useFields.toggle =  useField('toggle', form)
    return _useFields
}
export default useFieldsFrom;