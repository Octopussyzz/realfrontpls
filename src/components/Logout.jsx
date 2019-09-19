import React from 'react';

class Logout extends React.Component {
    sendLogout = () =>  {
        const TOKEN = localStorage.getItem('access_token');
        if (TOKEN) {
            localStorage.removeItem('access_token');
            // this.routeChange();
        }
    };

    render() {
        return this.sendLogout();
    }
}

export default Logout;