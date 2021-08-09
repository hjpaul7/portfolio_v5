import React from "react";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <a className="navbar-brand" href="#">
    //     Hustin Paul
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <a
    //           className="nav-link"
    //           href="mailto:hj.paul7@gmail.com"
    //           target="_blank"
    //         >
    //           Contact
    //         </a>
    //       </li>
    //     </ul>
    //     <span className="navbar-text">
    //       <a href="https://github.com/hustin-paul" target="_blank">
    //         Github
    //       </a>
    //     </span>
    //   </div>
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Hustin Paul
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:hj.paul7@gmail.com"
                target="_blank"
              >
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a
                className="nav-link"
                href="https://github.com/hustin-paul"
                target="_blank"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
