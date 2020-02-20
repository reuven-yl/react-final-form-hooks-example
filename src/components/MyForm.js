import React,{useMemo,useEffect} from 'react';
import { TextField,Checkbox ,SpinButton,Toggle} from 'office-ui-fabric-react';
import DropdownField from '../components/DropdownField'
import { useForm } from 'react-final-form-hooks';
import useFieldsFrom  from '../components/FieldForm'

const MyForm = () => {
var init = {
  agreementName: 'Clark Kent',
  commissionType: '1',
  checkbox: false,
  spinButton:5,
  toggle:false
};


  const initialValues = useMemo(() => (init), [])

  const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2))
  }

  const validate = values => {
    const errors = {}

    if (!values.agreementName){
      errors.agreementName = 'Required'
    }
    if (!values.commissionType) {
      errors.commissionType = 'Required'
    }
    
    return errors
  }

 // the function to call with your form values upon valid submit
 // a record-level validation function to check all form values
  const { form, handleSubmit, values, submitting } = useForm({ initialValues, onSubmit, validate})
  const useFields = useFieldsFrom(init,form)

    
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>שם הסכם</label>
        <TextField {...useFields.agreementName.input} placeholder="agreementName" />
        {useFields.agreementName.meta.touched && useFields.agreementName.meta.error && (<span>{useFields.agreementName.meta.error}</span>)}
      </div> 
     
       <label>סוג עמלה</label>
       <DropdownField
        useFieldInput={useFields.commissionType.input}
        defaultValue={init.commissionType}
        placeholder="בחר סוג עמלה"
        options={[
            { key: '1', text: '50-50 עם מינימום לבית' },
            { key: '2', text: 'רצפה'}
          ]}
          styles={{ dropdown: { width: 300 }, root: { height: 100 } }}
        /> 
         {useFields.commissionType.meta.touched && useFields.commissionType.meta.error && (<span>{useFields.commissionType.meta.error}</span>)}


         <Checkbox styles={{ Checkbox: { width: 300 }, root: { height: 100 } }} {...useFields.checkbox.input} label="Checked checkbox (uncontrolled)"   />
         <SpinButton
         {...useFields.spinButton.input}
          defaultValue={init.spinButton}
          label={'Decimal SpinButton:'}
          min={0}
          max={10}
          step={0.1}
          incrementButtonAriaLabel={'Increase value by 0.1'}
          decrementButtonAriaLabel={'Decrease value by 0.1'}
        />
        <Toggle  {...useFields.toggle.input} label="Enabled and checked" defaultChecked={init.toggle} onText="On" offText="Off"  />

      <button type="submit" disabled={submitting}>Submit</button>
    </form>
  )
}

export default MyForm;