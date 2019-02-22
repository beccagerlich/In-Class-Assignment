/*import ZipCodeInput from "./login";

var root = document.getElementById('root');

const App = () => {
    return React.createElement('div', {}, [
        React.createElement(FormInput, {}),
    ]);
};
 
ReactDOM.render(React.createElement(App), root);
*/
class AppComponent extends React.Component{

    //constructor
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className = "container">
                <EmailInput />
                <PasswordInput />
                <p>"Password must be 8 characters or more, have at least 1 number and 1 capitalized letter."</p>
                <Button />
            </div>
        );
    };
}

var root = document.getElementById('root');


ReactDOM.render(<AppComponent />, root);