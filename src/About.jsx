import React from "react";
import Header from "./Header";
class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const { no1, no2 } = this.props
        return (<>
            <h1>About</h1>
            No1 is  {this.props.no1} <br />
            No2 is  {this.props.no2}<br />
            Sum is {parseInt(no1)+parseInt(no2)}

        </>
        )
    }
}

export default About