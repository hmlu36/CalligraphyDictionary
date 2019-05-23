import React from 'react';
import ReactDOM from 'react-dom';

class SearchBlock extends React.Component {
  render() {
    return (
      <div className="form-group">
        <span>輸入文字</span><br />
        <div className="text-center">
          <textarea className="form-control" rows="10" value={this.props.inputText} onChange={this.props.changeState}></textarea>
        </div>
      </div>
    );
  }
}

class Character extends React.Component {
  render() {
    let cardStyle = "";

    return (
      <div className="col-auto">
        <div className="card" style={{ width: 7.03 + "rem" }}>
          <img className="card-img-top" src={`./photo/${this.props.message}.jpg`} alt="NotFound"></img>
        </div>
      </div>
    )
  }
}

class DisplayBlock extends React.Component {
  render() {
    let message = this.props.inputText.split('').map((char, index) => {
      return <Character key={index} name={char} message={char} />
    })

    return (
      <div className="row">
        {message}
      </div>
    )
  }
}

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    //增加了state.name用來放篩選留言者的值
    this.state = ({ inputText: '' });
    //照慣例也新增個changeState用來在使用者輸入值的時候觸發事件，改變state
    this.changeState = this.changeState.bind(this);
  }


  //更新使用者目前輸入的值到state中
  changeState(event) {
    this.setState({ inputText: event.target.value })
  }

  render() {
    return (
      <div>
        <SearchBlock inputText={this.state.inputText} changeState={this.changeState} />
        <hr />
        <DisplayBlock inputText={this.state.inputText} />
      </div>
    )
  }
}

//使用ReactDOM.render把剛建立的物件element插入目標DOM中
ReactDOM.render(<MainForm />, document.getElementById('root'));