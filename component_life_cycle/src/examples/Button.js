function Child(props) {     // один из дочерних компонентов получает и отображает значение переменной, а другой - коллбэк для ее изменения
    return (
        <span>{props.count}</span>
    )
}

function Button(props) {
    return (
        <div className="button" onClick={props.onClick}>Click!</div>
    )
}

export function Example() {
    const [count, setCount] = useState(0);

    const changeCount = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    return (
        <div>
            <Child number={count} />
            <Button onClick={changeCount} />
        </div>
    )
}