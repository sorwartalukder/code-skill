import React from 'react';

const Blog = () => {
    return (
        <div className='login-container min-vh-100'>
            <Question
                question="1 what is cors?"
                ans="Cross-Origin Resource Sharing  is an HTTP-header based mechanism that allows a server to indicate any origins  other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a preflight request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request."  >
            </Question>
            <Question question="2 Why are you using firebase? What other options do you have to implement authentication?" ans="Firebase can be seen as a server-less backend. Firebase use easy and service provided by Google. Can login and store data without band working possible by firebase.alternative of firebase -> MongoDB,Oracle Database,Amazon Redshift,DataStax Enterprise.">
            </Question>
            <Question question="3 How does the private route work?" ans="The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).">
            </Question>
            <Question question="4 What is Node? How does Node work?" ans="Node is an open-source backend javascript runtime environment. Node.js runs on chrome v8 engine which converts javascript code into machine code. Node.js accepts the request from the clients and sends the response.">
            </Question>
        </div>
    );
};
const Question = ({ question, ans }) => {
    return (
        <div className=' '>
            <h3 className=''>{question}</h3>
            <p>{ans}</p>
        </div>
    );
};

export default Blog;