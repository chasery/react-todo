import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Modal extends React.Component {
    render() {
        return ReactDOM.createPortal(
            <div className="ui dimmer modals visible active" onClick={this.props.closeModal()}>
                <div className="ui standard modal visible active" onClick={(e) => e.stopPropagation()}>
                    <i className="floated right icon close" onClick={this.props.closeModal()} />
                    {this.props.children}
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
};

export default connect(mapStateToProps)(Modal);