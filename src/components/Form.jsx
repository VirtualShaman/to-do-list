import React, {useState} from 'react';

const Form = () => {
    const [task, setTask] = useState({
        nameOfTask: "",
        isComplete: false
    })

    const [listOfTasks, setListOfTasks] = useState([])

    const changeHandler = (e)=>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const submitTask = (e)=>{
        e.preventDefault()
        setListOfTasks([...listOfTasks, task])

        //Clear out form inputs
        setTask({
            nameOfTask: "",
            isComplete: false
        })
    }
    
    const completeTask = (e,i)=>{
        let [...updatedListofTasks] = listOfTasks
        updatedListofTasks[i].isComplete = !updatedListofTasks[i].isComplete
        setListOfTasks(updatedListofTasks)
    }

    const deleteTask = (e,idx)=>{
        let newList = listOfTasks.filter((task,i)=>{
            return i != idx
        })

        setListOfTasks(newList)
    }

    return (
        <div>
            <form onSubmit= {submitTask}>
                <div>
                    <label htmlFor="">Task:</label>
                    <input onChange= {changeHandler} type="text" name="nameOfTask" value={task.nameOfTask}/>
                    <input type="submit" value="Add Task" />
                </div>
            </form>
            {
                listOfTasks.map((taskObj,i)=>{
                    return (
                        <div key = {i}>
                            <h3 
                                style = {{textDecoration: taskObj.isComplete? "line-through": "none"}}
                            >
                                {taskObj.nameOfTask} 
                                <input onClick={(e)=>completeTask(e,i)} type="checkbox" name=""/>
                            </h3>
                            <button onClick= {(e)=>deleteTask(e,i)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Form;