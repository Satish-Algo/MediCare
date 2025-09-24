import React from "react";
import {Link ,useNavigate} from "react-router-dom";
import {Container} from "../index.js";
import {useSelector} from "react-redux";
import logoutButton from "../button/LogButt.jsx";


function Header () {
    const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
   let navItems = [
        {
            name: "Home",
            slug:'/',
            active: true,
        },
        {
            name: "Login",
            slug:'/login',
            active:!authStatus,

        },
        {
            name: "Signup",
            slug:'/singup',
            active: !authStatus,

        },
        {
            name: "About",
            slug:'',
            active: true,

        },
        {
            name: "profile",
            slug: "/profile",
            active:true,
        }
    ];


    return (

        <header className="py-1   bg-gradient-to-r from-green-100 via-green-200 to-green-300  shadow-lg w-full my-3 rounded-2xl">
            <Container>
                <nav className="flex items-center ">
                    <div className="mr-4">
                        <Link to="/" >

                          <h1>login </h1>
                        </Link>
                    </div>
                    <ul  className="ml-auto flex items-center">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                         onClick={() => navigate(item.slug)}
                                        className="inline-block px-6 py-2 duration-200 hover:bg-gre hover:text-amber-50 rounded-full"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                    </ul>
                </nav>
            </Container>

        </header>
    )
}

export default Header
