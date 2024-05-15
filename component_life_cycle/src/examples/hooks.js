const changeCount = useCallback(() => {     // используют для функций, которые: а. Передаются пропсами другому компоненту
                                            // б. Используются в других хуках в том же компоненте
    setCount(1)
}, []);

const elem = useMemo(                               // служит для мемоизации значений
    () => props.hugeArray.find(el => el.show),
    [props.hugeArray]
);

export function Example(props) {            // используется для получения ссылки на DOM-элемент
const elem = useRef(null);
return (
    <div ref={elem}>
        Refs
    </div>
    )
}

export function Example(props) {
    const badIdea = () => {
        const err = useCallback(() => {
    // вызовет ошибку
        }, [])
    }
    for (let i = 0; i < 10; i++) {
    // вызовет ошибку
    const res = useMemo(() => null, []);
    }
    if (!props.show) {
    return null
    }
    // ошибка!
    const dont = useRef(null);
    return (
    <div>
    Hooks
    </div>
    )
    }
    function Button(props) {
    const [count, setCount] = useState(0);
    const changeCount = useCallback(() => {
    // здесь переменная count всегда равна 0,
    // т.к. коллбэк не обновляется при ее изменении
    console.log(count);
    }, []);
    const changeCountCorrect = useCallback(() => {
    // здесь переменная count всегда актуальна,
    console.log(count);
    }, [count]);
    return (
    <div className="button" onClick={props.onClick}>Click!</div>
    )
    }

    function usePrevious(value) {
        const ref = useRef();

        useEffect(() => {
            ref.current = value;
        }, [value]);
        
        return ref.current;
    }

    function Button() {
        const [count, setCount] = useState(0);

        const prevCount = usePrevious(count);

        useEffect(() => {
            if (prevCount !== count) {
                /* ... */
            }
        }, [prevCount, count]);

        const changeCount = useCallback(() => {
            setCount(1);
        }, []);

        return (
            <div className="button" onClick={changeCount}>
                Click!
            </div>
        );
    }