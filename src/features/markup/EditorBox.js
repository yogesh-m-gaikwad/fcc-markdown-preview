import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import store from '../../app/store';
/* 
  Colors and styles used by inline css are defined here. 
  Note - This is not part of assignment user stories.
 */
const RED ='RED';
const BLUE ='BLUE';
const BLACK ='BLACK';

const RED_STYLE = {color: 'red'};
const BLUE_STYLE = {color: 'blue'};
const BLACK_STYLE = {color: 'black'};

const RED_BG_STYLE = {backgroundColor: 'red', color: 'white' };
const BLUE_BG_STYLE = {backgroundColor: 'blue', color: 'white' };
const BLACK_BG_STYLE = {backgroundColor: 'black', color: 'white' };

export class EditorBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      selected: BLACK,
      style: BLACK_STYLE,
    }
    
    this.refreshMarkup = this.refreshMarkup.bind(this);
    this.setColor = this.setColor.bind(this);
    console.log("EditorBox: created!");
  }

  componentDidMount() {
    this.setState( () => { return {text: store.getState().markup.text};});
    console.log("EditorBox: is mounted!");
  }

  componentDidUpdated() {
    console.log("EditorBox: is updated!");
  }
  
  refreshMarkup(event){
    store.dispatch(this.props.refresh(event.target.value));
  }

  setColor = (color) => {
    console.log(`EditorBox: text color updated ${color}!`);
    switch(color){
      case RED:
        this.setState({style: RED_STYLE});
        break;
      case BLUE:
        this.setState({style: BLUE_STYLE});
        break;
      case BLACK:
        this.setState({style: BLACK_STYLE});
        break;
      default:  
        this.setState({style: BLACK_STYLE});
        break;
    }
  };

  render() {
    console.log("EditorBox: is rendering!");
    return (
        <div id="editor-wrapper" className="col-xs-12">
            <textarea id="editor" onChange={this.refreshMarkup} defaultValue={this.props.text} style={this.state.style}></textarea>
            <ButtonGroup>
              <Button className="color-picker" color="primary" onClick={() => this.setColor(RED)} active={this.state.selected === RED} style={RED_BG_STYLE}></Button>
              <Button className="color-picker" color="primary" onClick={() => this.setColor(BLUE)} active={this.state.selected === BLUE} style={BLUE_BG_STYLE}></Button>
              <Button className="color-picker" color="primary" onClick={() => this.setColor(BLACK)} active={this.state.selected === BLACK} style={BLACK_BG_STYLE}></Button>              
            </ButtonGroup>
        </div>
    );
  }
}