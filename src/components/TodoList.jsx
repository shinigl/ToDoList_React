import styles from './TodoList.module.css';
import { useState } from 'react';
import deleteIcon from '../assets/del.svg';

const Todo = () => {
  const [inputValue, setInputValue] = useState('');
  const [plans, setPlans] = useState([]);
  const [hours, setHours] = useState('');

  function addPlans() {
    if (inputValue.trim() && hours > 0) {
      setPlans((prevPlans) => [
        ...prevPlans,
        { subject: inputValue, hours: parseInt(hours) },
      ]);

      setInputValue('');
      setHours('');
    }
  }

  function removePlan(subject) {
    setPlans((prevPlans) => prevPlans.filter((plan) => plan.subject !== subject));
  }

  function incrementHours(subject) {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.subject === subject ? { ...plan, hours: plan.hours + 1 } : plan
      )
    );
  }

  function decrementHours(subject) {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.subject === subject && plan.hours > 1
          ? { ...plan, hours: plan.hours - 1 }
          : plan
      )
    );
  }

  return (
    <>
      <h1>Education Planner</h1>
      <div className={styles.container}>
        <input
          type="text"
          placeholder="Subject"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <button onClick={addPlans}>Add</button>
      </div>
      <ul className={styles.plans}>
        {plans.map((plan, idx) => (
          <li key={`${idx}_${plan.subject}`}>
            <span>{plan.subject}</span> 
            <div className={styles.hours}>
              <button onClick={() => decrementHours(plan.subject)}>-</button>
              {plan.hours} hours
              <button onClick={() => incrementHours(plan.subject)}>+</button>
            </div>
            <span>
              <img
                onClick={() => removePlan(plan.subject)}
                src={deleteIcon}
                alt="Delete"
              />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
