import Header from "./Header"
import './Style.css'
import Wp from './whatsapp.png';
function Home(props) {
    var a = 10
    var b = 20
    var mycolor = {
        backgroundColor:'blue',
        color:'white'
    }
    return (<div>
        <Header />
        {props.name}
        <h1>Home Component</h1>
        A Value is {a}
        B Value is {b}
        Sum is {a+b}
        {10+20}
        <p style={{color:'black',backgroundColor:'yellow'}}>I am P Tag</p>
        <p style={mycolor}>I am Second P Tag</p>
        <p className="myclass">I Am Class</p>
        <img src={Wp}/>
    </div>)
}
export default Home