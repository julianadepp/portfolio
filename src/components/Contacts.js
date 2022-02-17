import React from 'react';

function Contacts(props) {
    return (
        <div>
            <h2>Contact Me</h2>
            <div className='contactInfo'>
                <p><h3>New York, NY</h3>Email: julianadepp7@gmail.com <br/>
                <a target='_blank' rel="noopener noreferrer nofollow" href='https://github.com/julianadepp'><img width='50px' src='https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png' alt='github logo'/></a>
                <a target='_blank' rel="noopener noreferrer nofollow" href='https://www.linkedin.com/in/juliana-depp/'><img width='50px' src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png' alt='linked in logo'/></a>
                </p>
            </div>
        </div>
    );
}

export default Contacts;