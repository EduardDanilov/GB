import React, { useState } from 'react';
import styles from './Counter.module.css'

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div className={styles.divCounter}>
    <div className={styles.counter}>Counter: {counter}</div>
    <div className={styles.buttons}>
    <button onClick={() => setCounter(counter+1)} className={styles.btnInc}>Increment</button>
    <button onClick={() => setCounter(counter-1)} className={styles.btnDec}>Decrement</button>
    </div>
    </div>

  )
}

export default Counter