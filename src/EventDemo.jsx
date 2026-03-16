import React from 'react';
class EventDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    doSum(e){
        var a = parseInt(e.target.txt1.value)
        var b = parseInt(e.target.txt2.value)
        var c = a + b
        alert("Sum is "+c)
        e.preventDefault()
    }
    render() {
        return (
            <>
                <form onSubmit={this.doSum.bind(this)}>
                    No1 : <input type='text' name='txt1' />
                    No2 : <input type='text' name='txt2' />
                    <input type='submit' value="ClickMe" />
                </form>
            </>
        );
    }
}

export default EventDemo;