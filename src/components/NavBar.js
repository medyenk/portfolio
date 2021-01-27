import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                {/* <Link>Home</Link>
                <Link>Projects</Link>
                <Link>Skills</Link>
                <Link>Contact</Link> */}
                Home | Projects | Contact | About
            </div>
        )
    }
}