import './Message.css'

function Message({text = 'default'}) {
    return ( <p className="Message">{ text }</p> );
}

export default Message;