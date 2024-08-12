import React, { useState } from 'react';


const date =new Date();
 const getDate =date.getDate();
 const getMonth =date.getMonth();
 const getYear  =date.getFullYear();





function Header() {
    const [submenuVisible, setSubmenuVisible] = useState(false);

    const handleMouseEnter = () => {
        setSubmenuVisible(true);
    };

    const handleMouseLeave = () => {
        setSubmenuVisible(false);
    };


    return (
        <div>
            <nav>
                <div className="firstRow">
                    <div className="logo">
                        <div className="name">Newswire Today</div>
                    </div>
                    <div className="newsDiv">
                        <div className="headerNews"><span style={{fontSize:"12px", fontWeight:"50", color:'green'}}>{getDate+"/"+getMonth+"/"+getYear}</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus qui maxime at tempora necessitatibus!</div>
                        <div className="headerNews"><span style={{fontSize:"12px", fontWeight:"50", color:'green'}}>{getDate+"/"+getMonth+"/"+getYear}</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus qui maxime at tempora necessitatibus!</div>
                        <div className="headerNews"><span style={{fontSize:"12px", fontWeight:"50", color:'green'}}>{getDate+"/"+getMonth+"/"+getYear}</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus qui maxime at tempora necessitatibus!</div>
                        <div className="headerNews"><span style={{fontSize:"12px", fontWeight:"50", color:'green'}}>{getDate+"/"+getMonth+"/"+getYear}</span> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, possimus qui maxime at tempora necessitatibus!</div>
                    </div>
                </div>
                <div className="secondRow">
                    <div className="national"><li><a href="#">National News </a></li></div>
                    <div className="international"><li><a href="#">International News</a></li></div>
                    <div 
                        className="sports" 
                        id='menu' 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <li><a href="#">Sports News</a>
                            <ul className="submenu-content" id='submenu' style={{ display: submenuVisible ? 'block' : 'none' }}>
                                <li><a href="#">Cricket</a></li>
                                <li><a href="#">Football</a></li>
                            </ul>
                        </li>
                    </div>
                    <div className="business"><li><a href="#">Business News</a></li></div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
