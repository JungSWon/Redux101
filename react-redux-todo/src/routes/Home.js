import React, {useState} from 'react';

function Home() {
    const [text, setText] = useState('');
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault()
        setText("");
    }

    return (
        <div>
            <h1>ToDo</h1>
            <form onSubmit={onSubmit} action="">
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Home;
