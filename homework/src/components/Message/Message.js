// Домашнее задание
// 1. Развернуть новый проект с использованием create-react-app.
// 2. Создать компонент Message, отображающий переданный ему пропсом текст.
// 3. Изменить компонент App так, чтобы тот рендерил Message и передавал ему пропсом текст
// (константу).
// 4. Стилизовать компоненты через css (при желании можно использовать less или sass, однако
// для sass нужно дополнительно установить node-sass: документация CRA).
// 5. Установить расширение React Devtools.

import './Message.css'

function Message({text = 'default'}) {
    return ( <p className="Message">{ text }</p> );
}

export default Message;