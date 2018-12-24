import React from 'react';
import Person from './Person';

class State extends React.Component{
    constructor(){
        super();
        this.showPerson=this.showPerson.bind(this);
    }

    state = {
        showPerson: false
    }
    // state = {
    //         name: 'Bikesh',
    //         class: "XXI",
    //         roll: '1',
    //         showPerson: false
    //     }
    
    //     changeName(){
    //         if(this.state.name =='Bikesh'){
    //         this.setState({
    //             name: "koju"
    //         })
    //     }else{
    //         this.setState({
    //             name: "Bikesh"
    //         })
    //     }
    //     }
        
        showPerson(){
            this.setState({
                showPerson: !this.state.showPerson
            })
        }

    render(){
        return(
            <div>
                {/* <div><button onClick={this.changeName}>Change name</button></div>
                <label>{this.state.name}</label> */}
                <div><button onClick={this.showPerson}>Show Person</button></div>
                {this.state.showPerson && <Person/>}
                {this.state.showPerson?<Person/>:''}
            </div>
        );
    }
} 

export default State;