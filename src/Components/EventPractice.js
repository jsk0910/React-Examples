import { Component } from "react";

class EventPractice extends Component {
    state = {
        message: ''
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <div>
                    <input type="text" name="message" placeholder="아무거나" value={this.state.message} onChange={(e) =>{
                        this.setState({
                            message: e.target.value
                        })
                    }} />
                </div>
                <div>
                    <button onClick={() => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        })
                    }}>확인</button>
                </div>
            </div>
        )
    }
}

export default EventPractice;