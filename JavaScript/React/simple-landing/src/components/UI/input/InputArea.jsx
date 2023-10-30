import React, { useState } from 'react'
import styles from './InputArea.module.css'

function InputArea({...props}) {
  return (
    <input {...props} placeholder={props.placeholder} className={styles.input}/>
  )
}

export default InputArea