import React from "react";
import "./form.css";
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            subject:"",
            message:""
        }
        
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:[e.target.value]});
    }
    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_wikyp0a', e.target, 'user_BEeLrpWyAMe6H6QC44ev3')
          .then((result) => {
              console.log(result.text);
              toast.success("Email Sent");
          }, (error) => {
              console.log(error.text);
              toast.error("Email not sent");
          });
          e.target.reset();
      }
    render(){
        return(
            <div id="container">
                <div id="form" onSubmit={this.sendEmail}>
                    <form class="slide-in-elliptic-top-fwd">
                        <input type="text" name="name" placeholder="Enter Your Name" value={this.state.name} onChange={this.handleChange}></input><br/>
                        <input type="email" name="email" placeholder="Enter Your Email" value={this.state.email} onChange={this.handleChange}></input><br/>
                        <input type="text" name="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange}></input><br/>
                        <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea><br/>
                        <button>Send Message</button>
                    </form>
                </div>
                <ToastContainer/>
            </div>
        );
    }
}
export default Form;