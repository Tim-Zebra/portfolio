import React, {useState} from 'react';

export default function Contact() {
  // Creates a style for an alert messages
  const alertStyle = {
    color: 'red',
    textDecorationLine: 'underline',
    display: 'block',
  }

  const btnAlertStyle = {
    color: 'red',
    textDecorationLine: 'underline',
    display: 'block',
    margin_left: '20px',
  }

  // Variables for input content and validation  
  const [ usernameInput, setUsernameInput ] = useState('');
  const [ emailInput, setEmailInput ] = useState('');
  const [ messageInput, setMessageInput ] = useState('');
  const [ isUsernameAlertShown, setIsUsernameAlertShown ] = useState(false);
  const [ isEmailAlertShown, setIsEmailAlertShown ] = useState(false);
  const [ isMessageAlertShown, setIsMessageAlertShown ] = useState(false);
  const [ isEmailValid, setIsEmailValid ] = useState(true);

  const [ submitOkay, setSubmitOkay ] = useState(true);
  // Handle Mouse Over
  const handleMouseOverUser = (content) => {
    return content === ('') ? true:false;
  }

  const handleMouseOverEmail = (content) => {
    return content === ('') ? true:false;
  }

  const handleMouseOverMessage = (content) => {
    return content === ('') ? true:false;
  }

  // Handle form submit
  // Makes sure email is in the proper format
  const validateEmail = (email) => {
    // Regex to confirm email format
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    );

    // confirms match
      return email.match(validEmail);
  }

  const validate = (event) => {
    event.preventDefault();
    // Resets fields if valid info
    if(usernameInput && emailInput && messageInput && !isUsernameAlertShown && !isEmailAlertShown && !isMessageAlertShown && isEmailValid) {
        setUsernameInput('');
        setEmailInput('');
        setMessageInput('');
        setIsUsernameAlertShown(false);
        setIsEmailAlertShown(false);
        setIsMessageAlertShown(false);
        setSubmitOkay(true);
    } 
    else {
      setSubmitOkay(false);
    }
  }

  return (
    <section className="portfolioSection p-5 mx-auto" id="contactSection">
      <h1 className='text-center'>Contact Me @</h1>
      <div className="d-flex justify-content-center App">
        <form id="contact-form" >
          <div className="form-group"
            onMouseLeave={() => setIsUsernameAlertShown(handleMouseOverUser(usernameInput))}>
            <label htmlFor="name">Name</label>
            { isUsernameAlertShown &&
              <span style={alertStyle}>Please fill in the section below!</span>
            }
            <input type="text" className="form-control"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            >
            </input>
          </div>
          <div className="form-group"
            onMouseLeave={() => {setIsEmailAlertShown(handleMouseOverEmail(emailInput)); setIsEmailValid(validateEmail(emailInput));}}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            { isEmailAlertShown &&
                <span style={alertStyle}>Please fill in the section below!</span>
            }
            { !isEmailAlertShown && !isEmailValid &&
                <span style={alertStyle}>Invalid EMAIL!</span>
            }
            <input type="text" className="form-control"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            >
            </input>
          </div>
          <div className="form-group"
            onMouseLeave={() => setIsMessageAlertShown(handleMouseOverMessage(messageInput))}>
            <label htmlFor="message">Message</label>
            {isMessageAlertShown &&
                <span style={alertStyle}>Please fill in the section below!</span>
            }
            <textarea className="form-control" rows="5"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            >
            </textarea>
          </div>
          <button type="submit" className="btn w-100" id="contactSubmitBtn" onClick={validate}>Submit</button>
          {!submitOkay &&
            <div style={btnAlertStyle} className="text-center">Please see the above alerts and fix before submitting</div>
          }
        </form>
      </div>
    </section>
  );
}