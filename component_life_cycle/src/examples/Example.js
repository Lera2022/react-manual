export function Example(props) {    // коллбэк будет выполнен при первом вызове функции-компонента, а затем только при изменении пропса name
    const { name } = props.name;

    useEffect(() => {
        console.log('useEffect');
    }, [name]);

    return (
        <div>
            {name}
        </div>
    )
}

export function Example(props) {
    const { name } = props.name;

    useEffect(() => {                       // функция будет выполнена один раз, только после монтирования компонента 
        console.log('like didMount');
    }, []);

    useEffect(() => {                       // коллбэк исполняется при каждом обновлении
        console.log("like didUpdate");
    });

    useEffect(() => {
        return () => {                      // будет вызвана на этапе размонтирования компонента
        console.log('like willUnmount')
        }
        }, []);

    return (
        <div>
            {name}
        </div>
    )
}