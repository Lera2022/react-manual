function Child(props) {
    return (
        <span>{props.count}</span>
    )
}

export function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Child number={count} />
        </div>
    )
}