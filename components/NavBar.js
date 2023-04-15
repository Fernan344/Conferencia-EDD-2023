import React from "react";

function NavBar(props) {

    const handleChangeSearch = (e) => {
        const value = e.target.value
        props.searchState(value)
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>            
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChangeSearch}/>
                </form>
            </div>
        </nav>
    )
}

export default NavBar