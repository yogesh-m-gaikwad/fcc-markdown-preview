import React from 'react';
import { PreviewBox } from './features/markup/PreviewBox';
import { EditorBox } from './features/markup/EditorBox';
import { connect } from 'react-redux';
import { refreshAsync } from './features/markup/markupSlice';
import './App.css';

const mapStateToProps = (state) => ({
  text: state.markup.text
});

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: refreshAsync,
    dispatch
  };
};

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("App: created!");
  }

  render(){
    return (
      <div id="main-container" className="container">
          <div className="row">
              <EditorBox text={this.props.text} refresh={this.props.refresh}/>
          </div>
          <div className="row">
              <PreviewBox />
          </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);