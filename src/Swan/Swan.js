import React, { PureComponent } from 'react';
import './Swan.css';

class Swan extends PureComponent {

  render() {
    return (
      <div className="Swan" style={{ left: this.props.left, top: this.props.top, zIndex: this.props.zIndex }}>
        <img src={this.props.type + '-swan.png'} alt={this.props.type + ' swan'} />
      </div>
    )
  }
}

export default Swan
