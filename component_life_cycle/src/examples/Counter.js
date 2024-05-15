import React, { useState, useEffect } from 'react';

// export function Counter() {
//     const [count, setCount] = useState(0);

//     const updateCount = () => {
//         setCount(count + 1);
//         }

//         // const updateCount = () => {
//         //     setCount((prevCount) => prevCount + 1);  когда необходимо изменить обновить стейт, учитывая предыдущее его значение
//         //     }
        
//     return (
//         <div>
//             <span className="counter">{count}</span>
//             <button className="counter-button" onClick={updateCount}>+1</button>
//         </div>
// )
// }

// export function Counter() {                          // создания контролируемых форм ввода
//     const [value, setValue] = useState('');
//     const handleChange = (event) => {
//         setValue(event.target.value);
//     }
//     return (
//         <div>
//             <input type="text" value={value} onChange={handleChange} />
//         </div>
//     )
// }

export function Counter() {                 // выполнения некоторой функции в ответ на изменение переменной стейта
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <span className="counter">{count}</span>
            <button className="counter-button" onClick={updateCount}>Click!</button>
        </div>
    )
}