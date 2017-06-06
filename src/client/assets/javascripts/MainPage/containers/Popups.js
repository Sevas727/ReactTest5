import React, { Component, PropTypes } from 'react';

export default class Popups extends Component {

  componentWillReceiveProps(nextProps){
    if(nextProps.popupsQue.length && nextProps.popupsQue.length !== this.props.popupsQue.length){
        this.props.showPopup(nextProps.popupsQue[0])
      }
    }

  render(){

    return <div className="popups-container" style={{display: this.props.popupsQue.length ? "block" : "none"}}>
    {this.props.popups.showPopap1 && <div className="popups" style={{
          backgroundColor:"red"
          }}>
      Popup 1
      <button onClick={this.props.closePopup}>Close Popup</button>
    </div>}
    {this.props.popups.showPopap2 && <div className="popups" style={{
          backgroundColor:"blue"
          }}>
      Popup 2
      <button onClick={this.props.closePopup}>Close Popup</button>
    </div>}
    {this.props.popups.showPopap3 && <div className="popups" style={{
          backgroundColor:"green"
          }}>
      Popup 3
      <button onClick={this.props.closePopup}>Close Popup</button>
    </div>
    }
    </div>
  }
}
