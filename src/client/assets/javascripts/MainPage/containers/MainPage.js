import React, { Component, PropTypes } from 'react';
import './MainPage.scss';
import { connect } from 'react-redux';
import { setPopups } from "../../actions/popups.actions.js"
import { bindActionCreators } from 'redux';

@connect((state)=>({
    popups: state.productsReducer.popups
  }), (dispatch)=>({
    actions: bindActionCreators({setPopups}, dispatch)
  })
)

export default class MainPage extends Component {
  constructor(prop){
    super();
    this.state = {
      checkAll: false,
      popups: {
        showPopap1: false,
        showPopap2: false,
        showPopap3: false
      },
      selected: []
    };

    this.closePopup = this.closePopup.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this._setPopups = this._setPopups.bind(this);
  }

  componentWillReceiveProps(nextProps){

    if(nextProps.popups.length){
      let popups = Object.assign({}, this.state.popups);
          popups[`${nextProps.popups[0]}`] = true;
      this.setState({popups : popups})
    } else {
      if(this.props.popups.length){
        let popups = Object.assign({}, this.state.popups);
        for (let p in popups) {
          popups[p] = false;
        }
        this.setState({popups: popups});
      }
    }
  }

  handleInputChange = function(){
    this.setState({checkAll: !this.state.checkAll})
  };

  onSelect = function(e){
    if(e.target.value !== "") this.setState({selected: [e.target.value]});
  };

  _setPopups = function(){
      if(this.state.checkAll){
        let selected = [];

        for (let p in this.state.popups) {
          selected.push(`${p}`);
        }
        this.props.actions.setPopups(selected);
      } else {
        this.props.actions.setPopups(this.state.selected);
      }
  };

  closePopup = function(){
    let popups = this.props.popups.slice();
        popups.shift();
        this.props.actions.setPopups(popups);
  };

  render() {
    return <div className="wrapper">
      <div>
        <input
          name="checkAll"
          type="checkbox"
          checked={this.state.checkAll}
          onChange={this.handleInputChange}/>
      </div>
      <select onChange={this.onSelect}>
        <option value="" >Choose popup</option>
        <option value="showPopap1">Popup 1</option>
        <option value="showPopap2">Popup 2</option>
        <option value="showPopap3">Popup 3</option>
      </select>
      <button onClick={this._setPopups}>Show Popups</button>

      {this.state.popups.showPopap1 && <div className="popups" style={{
          backgroundColor:"red"
          }}>
        Popup 1
        <button onClick={this.closePopup}>Close Popup</button>
      </div>}
      {this.state.popups.showPopap2 && <div className="popups" style={{
          backgroundColor:"blue"
          }}>
        Popup 2
        <button onClick={this.closePopup}>Close Popup</button>
      </div>}
      {this.state.popups.showPopap3 && <div className="popups" style={{
          backgroundColor:"green"
          }}>
        Popup 3
        <button onClick={this.closePopup}>Close Popup</button>
      </div>}
    </div>;
  }
}
