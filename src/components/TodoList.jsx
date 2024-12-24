import styles from './TodoList.module.css'
import { useState } from 'react';
const Todo = ()=>{

    const [inputValue, setInputValue] = useState('');
    const [plans,setPlans] = useState([]);
    const [hours,setHours] = useState('');

    function addPlans(){
        if(inputValue.trim() && hours>0){
            setPlans((prevPlans)=>[
                ...prevPlans,
                {subject:inputValue , hours: parseInt(hours)}
                
                ]);
            
            setInputValue('');
            setHours('');
        }
    }

   return(
    <>
      <h1>Education Planner</h1>
      <div className={styles.container}>      
        <input type="text" 
        placeholder='Subject'
        value={inputValue} 
        onChange={(e)=>setInputValue(e.target.value)}/>
        
        <input type="number" placeholder='Hours' 
        value={hours} 
        onChange={(e)=>setHours(e.target.value)} />
        <button onClick={addPlans}>Add</button>
     
      </div>
      <ul className={styles.plans}>
          {plans.map((plan,idx)=>{
            return(<>
             <li key={idx}><span>{plan.subject}</span> - {plan.hours} hours</li>
            </>)
          })}
     </ul>
    </>
   )
}

export default Todo ;