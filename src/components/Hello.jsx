import "./Hello.css"

// creating a second component :Hello
const Hello = (props)=>{
    // javascript codes
    // console.log(props)


    // const headerStyle = {color:"red",fontFamily:"roboto"}
    return (
      <h1 className="header">Hello {props.name}!</h1>
    )
}

export default Hello;
  