import { Component } from "react";
import './App.css';
import Person from './components/Person.js';
import InputComp from './components/InputComp.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

      personList: [{ id: 1, name: '이민호', age: 20, height: 180 },
      { id: 2, name: '정채연', age: 21, height: 170 },
      { id: 3, name: '송중기', age: 22, height: 176 }]

    }
  }

  addPersonInfo = (obj) => {
    alert('추가!(App)')
    console.log(obj)
    const concatedList = this.state.personList.concat(obj)
    this.setState({
      personList: concatedList
    })
  }

  deletePersonInfo = (id) => {
    alert('삭제(App)')
    alert('Person component에서 받은 삭제 할 id: ' + id)
    const filteredList = this.state.personList.filter((data) => (data.id !== id))
    // 배열에서 가져온 id와 넘겨받은 삭제할 id를 비교하여 다른 원소만 새로운 배열로 만든다.
    this.setState({
      personList: filteredList
    })
  }

  updatePersonInfo = (id, updatedData) => {
    alert('수정(App)')
    const updatedList = this.state.personList.map((data) => {
      if (data.id == id) {
        return { ...data, ...updatedData};
      }
      return data
    })
    this.setState({
      personList: updatedList
    })
  }


  render() {
    const result = this.state.personList.map(
      (data) => (<Person key={data.id}
        id={data.id}
        name={data.name}
        age={data.age}
        height={data.height}
        deletePersonInfo={this.deletePersonInfo}
        updatePersonInfo={this.updatePersonInfo}
      />)
    )

    return (
      <div id='app'>
        <InputComp addPersonInfo={this.addPersonInfo} 
        updatePersonInfo={this.updatePersonInfo} />
        {result}
      </div>
    )
  }

}

export default App;