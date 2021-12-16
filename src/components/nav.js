import { useState } from "react";
import Data from "../data/data"
import Link from 'next/link'

const Nav = () => {
    const [isShowing, setIsShowing] = useState(false);
    const toggle = () => {
        setIsShowing(!isShowing);
    };
    return(
        <ul>
            <li style={{position: "relative"}} onClick={toggle} className={isShowing ? "open last" : "last"}>Locations
                <span className="arw-down"></span>
                <div className="filled-right-arrow"></div>
                <ul className="sub-nav" style={{ display: isShowing ? "block" : "none" }}>
                    {Data.map((item, index) => {
                    return(
                        <li key={index}><Link href={item.link}>{item.name}</Link></li>  
                    )
                    })}
                </ul>
            </li>
        </ul>
    )
}

export default Nav