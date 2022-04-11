import { useState } from 'react'
const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [rem,setRem] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text){
            alert('Please Add a task')
            return
        }
        onAdd({ text,day,rem })
        // to clear the form
        setText('')
        setDay('')
        setRem(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='Add Task Here' value = {text} onChange ={(e)=>setText(e.target.value) } />
        </div>
        <div className='form-control'>
            <label>Day and Time</label>
            <input type="text" placeholder='Add Day & Time Here' value = {day} onChange ={(e)=>setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input  type="checkbox" 
            checked ={rem} value = {rem} onChange ={(e)=>setRem(e.currentTarget.checked)}/>
        </div>
        <input type="submit" className='btn btn-block' value = 'Save Task'/>

    </form>
  )
}

export default AddTask