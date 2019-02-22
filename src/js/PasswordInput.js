class PasswordInput extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_password: ''}; 

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handlePasswordChange(event){
        const delivery_password = event.target.value;
        this.setState( () => {
                return {
                    delivery_password
                }
            }
        );

        const zip = this.state.delivery_password;

    }
    
    //Possible restrictions for password:

    /*lengthRange(inputtxt, minlength)
    {  	
       var delivery_password = inputtxt.value;  
       if(delivery_password.length >= minlength)
          {  	
            return true;  	
          }
       else
          {  	
        alert("Please input 8 characters or more");  		
            return false;  	
          }  
    }
    
    handleSubmit(event) {
        if(this.state.delivery_password.length < 8) {
            return alert('ERROR!!! Your password must be at least 8 characters long, have at least 1 number and capitalized letter!');
        }
    }*/
  
    render() {
        return (
            <div className="form-group">
                <input className="form-control" 
                       id="passwordInput" 
                       onChange={this.handlePasswordChange}                       
                       placeholder="Your Password" 
                       type="password"
                       value={this.state.delivery_password} 
                        />
            </div>
        );
    };
}
