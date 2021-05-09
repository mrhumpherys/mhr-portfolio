import React from 'react';

function Header(props) {
    const tabs =['About', 'Portfolio', 'Contact', 'Resume']
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Michael Humpherys</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}>
                    <a
                        href={'#' + tab.toLowerCase()}
                        // Whenever a tab is clicked on,
                        // the current page is set through the handlePageChange props.
                        onClick={() => props.setCurrentPage(tab)}
                        className={
                        props.currentPage === tab ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {tab}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
        
    )
}

export default Header;