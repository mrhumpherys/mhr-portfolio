import React from 'react';

function Footer() {
    return (
        <footer className="text-center text-white myfoot fixed-bottom">
  
  <div className="container pt-1">
    
    <section className="mb-4">
      
      
      <a
        className="btn btn-link btn-floating btn-lg text-light m-1"
        href="https://www.linkedin.com/in/michael-humpherys-587051201/"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i>
      </a>
      
      <a
        className="btn btn-link btn-floating btn-lg text-light m-1"
        href="https://github.com/mrhumpherys"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i>
      </a>
      <a
        className="btn btn-link btn-floating btn-lg text-light m-1"
        href="mailto:mrhumpherys@gmail.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fas fa-paper-plane"></i>
      </a>

    </section>
  </div>
</footer>
    )
}

export default Footer;