import React, {  useState } from 'react';
import { Dropdown } from 'office-ui-fabric-react';


const DropdownField = ({options,placeholder,useFieldInput,styles,defaultValue }) => {

    const getOption = () => {
        if (options&& defaultValue) {
            var target =  options.find(f => f.key == defaultValue)
            if (target) {
                Object.assign(target, {selected: true});
                delete options[target]   
            }
         }
        return options;
      }

    const [targetOptions] = useState(getOption())

    return (
        <>
         <Dropdown    
          {...useFieldInput}
          placeholder={placeholder}
          options={targetOptions}
          styles={styles}
        /> 
        </>
    )
}
export default DropdownField;