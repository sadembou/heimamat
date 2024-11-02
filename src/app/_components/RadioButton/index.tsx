import React from 'react'
import classes from './index.module.scss'

type RadioButtonProps = {
    label: string
    value: string
    isSelected: boolean
    onRadioChange: (value: string) => void
    groupName: string
  }
  

const RadioButton = ({label, value, isSelected, onRadioChange, groupName } : RadioButtonProps ) => {
    const handleRadioChange = () => {
        onRadioChange(value)
      }
    
      return (
        <label className={classes.radioWrapper}>
          <input
            type="radio"
            checked={isSelected}
            onChange={handleRadioChange}
            className={classes.radio}
            name={groupName}
          />
          {label}
        </label>
      )
}

export default RadioButton