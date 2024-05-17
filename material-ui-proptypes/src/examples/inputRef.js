const Input = (props) => {
    const inputRef = useRef(null);
    //...
    return (
        <input ref={inputRef} />
    )
}

useEffect(() => {
    inputRef.current?.focus();
}, []);
        
useEffect(() => {
    console.log('i will be called on every render!');
})

const isFirstRender = useRef(true);

useEffect(() => {
    if (!isFirstRender) {
        console.log("i will be called on every render except first!");
    }
});

useEffect(() => {
    isFirstRender.current = false;
}, []);