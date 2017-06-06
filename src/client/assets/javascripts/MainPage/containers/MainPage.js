import React, { Component, PropTypes } from 'react';
import './MainPage.scss';
import { connect } from 'react-redux';
import { setPopups, showPopup, closePopup } from "../../actions/popups.actions.js"
import { bindActionCreators } from 'redux';
import Popups from './Popups';

@connect((state)=>({
    popups: state.popupsReducer.popups,
    popupsQue: state.popupsReducer.popupsQue
  }), (dispatch)=>({
    actions: bindActionCreators({setPopups, showPopup, closePopup}, dispatch)
  })
)

export default class MainPage extends Component {
  constructor(prop){
    super();
    this.state = {
      checkAll: false,
      selected: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this._setPopups = this._setPopups.bind(this);
  }

  handleInputChange = function(){
    this.setState({checkAll: !this.state.checkAll})
  };

  onSelect = function(e){
    this.setState({selected: [e.target.value]});
  };

  _setPopups = function(){
      if(this.state.checkAll){
        let selected = [];

        for (let p in this.props.popups) {
          selected.push(`${p}`);
        }
        this.props.actions.setPopups(selected);
      } else if (this.state.selected[0] !== "") {
        this.props.actions.setPopups(this.state.selected);
      }
  };

  render() {

    let options = [];

    for (let p in this.props.popups){
      options.push(p);
    }


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
        {
          options.map((item, i) => <option key={i} value={`${item}`}>Popup {++i}</option>)
        }

      </select>
      <button onClick={this._setPopups}>Show Popups</button>
      <Popups
              popups={this.props.popups}
              popupsQue={this.props.popupsQue}
              showPopup={this.props.actions.showPopup}
              closePopup={this.props.actions.closePopup}
      />
    </div>;
  }
}
