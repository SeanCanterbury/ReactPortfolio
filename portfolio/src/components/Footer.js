import React from 'react';
import "../styles/Footer.css";
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import GmailIcon from '@material-ui/icons/Mail';

function Footer() {
    return <div className = "footer">
        <div className='socialMedia'>
            <LinkedinIcon />
            <GithubIcon />
            <GmailIcon />
        </div>
        <p> &copy; 2024 seancanterbury.com </p>
        </div>;
}

export default Footer;