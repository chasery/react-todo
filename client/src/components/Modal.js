import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={props.closeModal()}>
            <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                <i className="floated right icon close" onClick={props.closeModal()} />
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;