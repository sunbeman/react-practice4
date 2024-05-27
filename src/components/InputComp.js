import '../css/InputComp.css';
import { Component } from 'react';

class InputComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            age: '',
            height: ''
        }
    }

    addPersonInfo = () => {
        alert('추가!(InputComp')
        const { id, name, age, height } = this.state
        const personObj = { id: id, name: name, age: age, height: height }
        this.props.addPersonInfo(personObj)
    }

    updatePersonInfo = () => {
        alert('수정!(InputComp)')
        const { id, name, age, height } = this.state
        const updatedData = { id: id, name: name, age: age, height: height }
        this.props.updatePersonInfo(id, updatedData)
    }

    idChange = (e) => {
        console.log(e.target.value)
        this.setState({
            id: e.target.value
        })
    }

    nameChange = (e) => {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    ageChange = (e) => {
        console.log(e.target.value)
        this.setState({
            age: e.target.value
        })
    }

    heightChange = (e) => {
        console.log(e.target.value);
        this.setState({
            height: e.target.value
        })
    }



    render() {
        return (
            <div id='input-comp'>
                <input type='text' placeholder='아이디' onChange={this.idChange} />
                <input type='text' placeholder='이름' onChange={this.nameChange}/>
                <input type='text' placeholder='나이' onChange={this.ageChange}/>
                <input type='text' placeholder='키' onChange={this.heightChange}/>

                <button onClick={this.addPersonInfo}>추가</button>
                <button onClick={this.updatePersonInfo}>수정</button>
            </div>
        )

    }
}

export default InputComp;