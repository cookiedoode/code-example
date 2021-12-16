import { useState } from "react";
import Data from "../data/data"
import Link from 'next/link'

const Nav = () => {
    return(
        <ul className="nav">
            <li><Link href="/">Home</Link></li>
            {Data.map((item, index) => {
            return(
                <li key={index}><Link href={item.link}>{item.name}</Link></li>  
            )
            })}
        </ul>
    )
}

export default Nav