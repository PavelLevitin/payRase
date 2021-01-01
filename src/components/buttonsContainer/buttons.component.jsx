import React,{Component} from 'react';
import Modal from 'react-awesome-modal';
import './buttons.styles.css';


const getRandomPoint = () => {
    let x = (Math.random() * (window.innerWidth/2 )).toFixed()
    let y = (Math.random() * (window.innerHeight/4)).toFixed()
    return {
      top: y + 'px',
      left: x + 'px'
    }
}


class TwoButtons extends Component {
 constructor(){
  super();

  this.state={
    styles:{
            top: '0px',
            left: '0px'
           },
    isOpen:false       
  }
 }
 openModal() {
    this.setState({
        isOpen : true
    });
  }   
  closeModal() {
    this.setState({
        isOpen : false
    });
  }  
  
 // ()=>{this.setState({styles:getRandomPoint()})
render (){
     return (
         <div className="buttons-container">
            
          <div className="prank" style={this.state.styles} onMouseOver={()=>
            {this.setState({styles:getRandomPoint()});}}>
                <span>Yes Sure</span>
          </div>
          <div className="static" onClick={() => {this.openModal()}}>
            <span>No Thank you</span>
          </div>
          <section>
                <Modal visible={this.state.isOpen} width="600" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className="wraper">
                        <button  onClick={() => this.closeModal()}>X</button>
                        <div className="model-heading">
                           <h1>Thank you</h1>
                        </div>
                        <div className="model-contant">
                           <h3>We very much appreciate your decision</h3>
                        </div>
                       
                    </div>
                </Modal>
            </section>
        </div>
     )
 }
}

export default TwoButtons;
