import React from 'react'
import "../Styles/Navbar2.css"

function Navbar2() {
    const [show, setShow] = React.useState(false);

    function toggle(){
        setShow((prevShow) => !prevShow);
    }

    const styles={
        left: show ? "0%": "-100%"
    }

    return (
        <nav className="navbar">
            <div className="content">
                <div className="logo">
                    <a href="#Home">CodingNepal</a>
                    </div>
                    <ul className="menu-list" style={styles}>
                        <div className="icon cancel-btn" onClick={toggle}>
                            <i className="fas fa-times"></i>
                        </div>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Features">Features</a></li>
                        <li><a href="#Contacts">Contacts</a></li>
                    </ul>
                    <div className="icon menu-btn" onClick={toggle}>
                        <i className="fas fa-bars"></i>
                    </div>
            </div>
        </nav>
  )
}

export default Navbar2
