import React from 'react'

class Profile extends React.Component {
    componentDidMount() {
        fetch('/charliesroute').then(function(a1, a2, a3) {
            console.log(a1, a2, a3);
            return a1.json();
        }).then(function(a1, a2, a3) {
           console.log(a1, a2, a3);
           debugger;
       })
    }
    render() {
        return <div>hi</div>;
    }
}
export default Profile;