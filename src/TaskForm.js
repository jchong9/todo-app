import {useState} from 'react';

export default function TaskForm() {
    const [taskName, setTaskName] = useState('');
    return (
        <form>
            <button>Enter</button>
            <input type='text'
                   value={taskName}
                   onChange={ev => setTaskName(ev.target.value)}
                   placeholder='TODO' />
        </form>
    );
}