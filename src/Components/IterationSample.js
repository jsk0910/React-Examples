/*const IterationSample = () => {
    const names = ['1', '2', '3', '4']
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>
}*/

import {useState} from 'react'

const IterationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: '시리' },
        { id: 2, text: '레드' }
    ])

    const [inputText, setInputText] = useState('')
    const [nextId, setNextId] = useState(3)

    const onChange = e => setInputText(e.target.value)

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });

        setNextId(nextId+1)
        setNames(nextNames)
        setInputText('')
    }

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames)
    }

    const nameList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)

    return (
        <div>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    )
}

export default IterationSample;