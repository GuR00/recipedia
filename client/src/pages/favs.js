import React from 'react'
import{Panel,PanelGroup,Button} from "react-bootstrap";
import axios from "axios";
class Favs extends React.Component{
    constructor(props){
        super();

    }
    state={
        favorites:[]
    }
    componentDidMount(){
        fetch("/login/favs/api")
        .then((res) => res.json())
        .then((Db)=>{
            console.log(Db)
            this.setState({favorites:Db})
            console.log(this.state.favorites[0])
        })

    }
     
//     getFavs(){
//         var one=this.state.favorites[0]
//         fetch("/recipefavssearch",{
//             method: 'POST',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//             },
//             body:JSON.stringify(one)
//         .then((res)=>res.json())
//         .then((favs)=>{
//             console.log("this is the favs"+favs)
//         })
//     })
// }
        
    render(){
        return(
            
            <PanelGroup accordion id="accordion-example">
  <Panel eventKey="1">
    <Panel.Heading>
      <Panel.Title toggle>Favorites</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
        {/* <Button onClick={this.getFavs}>Click Me</Button> */}
      <p>{this.state.favorites}</p>
    </Panel.Body>
  </Panel>
  <Panel eventKey="2">
    <Panel.Heading>
      <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
      
    </Panel.Body>
  </Panel>
  <Panel eventKey="3">
    <Panel.Heading>
      <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
    </Panel.Heading>
    <Panel.Body collapsible>
    
    </Panel.Body>
  </Panel>
</PanelGroup>)
        
    }

}
export default Favs;