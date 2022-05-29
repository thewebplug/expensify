import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const authCheck = (WrappedComp) => {
    return (props) => (
        <div>
            {
                props.isAuth ? 
                <WrappedComp {...props}/> : 
                <p>Please Login to view this Information</p>
            }
        </div>
    )
}

const AuthInfo = authCheck(Info); 

ReactDOM.render(<AuthInfo info="hello" isAuth={true}/>, document.getElementById('app'))
