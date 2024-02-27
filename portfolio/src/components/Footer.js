import React from 'react';
import "../styles/Footer.css";
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import GmailIcon from '@material-ui/icons/Mail';

function Footer() {
    return <div className = "footer">
        <div className='socialMedia'>
            <a href="https://www.linkedin.com/in/sean-canterbury-bb938b1b9/">
                <LinkedinIcon />
            </a>
            <a href="https://www.github.com/SeanCanterbury">
                <GithubIcon />
            </a>
            <a href="mailto:swcanterbury7@gmail.com">
                <GmailIcon />
            </a>
        </div>
        <p> &copy;      2024      seancanterbury.com </p>
        </div>;
}

export default Footer;