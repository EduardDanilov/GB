import styles from './AddTaskButton.module.css'

const AddTaskButton = ({children, ...props}) => {
    
  return (
    <button {...props} className={styles.btn}>{children}</button>
  )
}

export default AddTaskButton