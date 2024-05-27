import '../css/Person.css';




function Person(props) {

    const deletePersonInfo = () => {
        props.deletePersonInfo(props.id)
        alert('삭제!(Person)')
    }

    return (
        <div id='person'>
            <div>
                이름: {props.name}
            </div>

            <div>
                나이: {props.age}
            </div>

            <div>
                키: {props.height}
            </div>

            <div>
                <button onClick={deletePersonInfo}>삭제</button>
            </div>
        </div>

    )
}

export default Person;