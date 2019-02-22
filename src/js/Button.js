class Button extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_button: ''}; 

        this.handleButton = this.handleButton.bind(this);

    }

    handleButton(event){
        const delivery_button = event.target.value;
        this.setState( () => {
                return {
                    delivery_button
                }
            }
        );

        const zip = this.state.delivery_button;

    }    

    render() {
        return (
            <div className="btn btn-primary">
                <button className="btn" 
                       id="button" 
                       onChange={this.handleButton}                       
                       placeholder="Submit" 
                       type="submit"
                       value={this.state.delivery_button}> Submit</button>
            </div>
        );
    };
}