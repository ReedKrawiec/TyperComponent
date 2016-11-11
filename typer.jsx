import * as React from "react";

class Typer extends React.Component{
  constructor(props){
    super();
    this.state = {word:props.word}
  }
  componentWillReceiveProps(nextProps){
    let finished_timer_ref;
    let this_ = this;
    let current_word_index = this.state.word.length - 1;
    const word_remove = ()=>{
      if(current_word_index === -1){
        clearInterval(timerInterval);
        current_word_index = 0;
        finished_timer_ref = setInterval(word_writer,100);
      } 
      else{
        this.setState({word:this_.state.word.substring(0,current_word_index)});
        current_word_index--;
      }
    }
    const word_writer = ()=>{
      let word_length = nextProps.word.length;
      if(current_word_index === word_length){
        clearInterval(finished_timer_ref);
      }
      else{
        let word_slice = this.state.word+=nextProps.word[current_word_index];
        this.setState({word:word_slice});
        current_word_index++;
      }
    }
    let timerInterval =  setInterval(word_remove,50);
  }
  render(){
    return(<span>{this.state.word}</span>)
  }
}
class TyperWrapper extends React.Component{
  changeWord(){
    let new_value = this.state.current_word + 1;
    if(new_value === this.props.words.length)
      new_value = 0;
    this.setState({current_word:new_value}) 
  }
  componentDidMount(props){
    let this_ = this
    setInterval(()=>{this_.changeWord()},this_.props.delay);
  }
  constructor(){
    super();
    this.state = {current_word:0}
    this.changeWord = this.changeWord.bind(this);
    this.componentWillRecieveProps = this.componentDidMount.bind(this);  
  }
  render(){
    return (<Typer word={this.props.words[this.state.current_word]} />);
  }
}

export default TyperWrapper