import React, { PureComponent } from 'react';
import Modal from 'react-modal';
import './Explainer.css';

const customStyles = {
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    userSelect            : 'none',
  }
}

class Explainer extends PureComponent {

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        style={customStyles}
        contentLabel="Explanation"
      >
        <div className="Explainer">
          <h2>You've found a black swan!</h2>
        </div>
      </Modal>
    )
  }
}

export default Explainer;