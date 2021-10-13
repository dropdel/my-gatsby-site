import * as React from 'react';
import { Link } from 'gatsby';
// kebab-case to camelCase
import { container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'; 

const Layout = ({ pageTitle, children }) => {
    return (
      <div className={container}>
        <title>{pageTitle}</title>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    )
  }
  
// const Layout = (props) => {
//     const pageTitle = props.pageTitle;
//     const children = props.children;
// }

export default Layout