import './styles.scss';

import NavigationBar from 'components/Shared/NavigationBar';
import Footer from 'patterns/layouts/Footer';
import React from "react";

const InternalLayout = ({ children, lang}) => {
    return (
        <div className="App">
            <NavigationBar lang={lang} searchBar />
            {children}
            <Footer />
        </div>
    )
}

export default InternalLayout;