import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/color" className="item">
                Color
            </Link>
            <Link href="/bw" className="item">
                B&W
            </Link>
            <Link href="/potraits" className="item">
                Potraits
            </Link>
            <Link href="/about" className="item">
                About
            </Link>
            <Link href="/contact" className="item">
                Contact
            </Link>
        </div>
    );
};

export default Header;