// Домашнее задание
// 1. Добавить в компонент App поле стейта messageList. В нем хранить массив объектов -
// сообщений (объект должен содержать, как минимум, поля text и author). Начальное
// значение - пустой массив).
// 2. Рендерить список сообщений через map.
// 3. Добавить и стилизовать форму - поле для ввода текста и кнопка для отправки сообщения.
// При отправке сообщения обновление UI должно происходить за счет обновления стейта
// App.
// 4. Добавить в App useEffect - на каждое отправленное пользователем сообщение должен
// отвечать робот (должно автоматически отправляться сообщение с фиксированным
// текстом) - для этого необходимо проверять автора последнего сообщения.
// 5. * Сделать задержку ответа робота - сообщение от него должно отправляться через
// некоторый промежуток времени после отправки сообщения пользователя (напр., 1.5 сек).

function Form() {
    return (
        <form></form>
    );
}

export default Form;