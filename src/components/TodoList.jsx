import styles from './TodoList.module.css'

const Todo = ()=>{
   return(
    <>
      <h1>Education Planner</h1>
      <div className={styles.container}>      
        <input type="text" placeholder='Subject'/>
        <input type="number" />
        <button>Add</button>
      </div>

    </>
   )
}

export default Todo ;