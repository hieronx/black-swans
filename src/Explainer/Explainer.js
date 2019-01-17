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
    maxWidth              : '600px'
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

          <p>With this visualisation, we've tried to show you the <u>problem of induction</u>. Now, you could have seen <b>{this.props.count - 1} swans</b>, stopped and determined that since all the swans you had seen so far were white, all swans must be white.</p>
          
          <p>However, this would have been a logical mistake, since the <b>{this.props.count}th swan</b> you saw was black. There are actually black swans in the wild, there are just significantly less of them than there are white swans.</p>

          <p>You can read more about the problem of induction here: <a href="https://en.wikipedia.org/wiki/Problem_of_induction" target="_blank">https://en.wikipedia.org/wiki/Problem_of_induction</a>.</p>

          <small>Note: in this visualisation, the chance of finding a black swan is 1/200th, which is not based on actual population data of black versus white swans in the world.</small>
        </div>
      </Modal>
    )
  }
}

export default Explainer;