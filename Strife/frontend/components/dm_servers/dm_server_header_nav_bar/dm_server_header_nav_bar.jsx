import React from "react";


class DmServerHeaderNavBar extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="dm-server-header-bar">
                <div className="dm-server-bar-children">
                    <div className="dms-children-icon-wrapper">
                        <svg x="0" y="0" className="icon-at-sym" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12C2 17.515 6.486 22 12 22C14.039 
                            22 15.993 21.398 17.652 20.259L16.521 18.611C15.195 19.519 13.633 20 12 20C7.589 20 4 
                            16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12V12.782C20 14.17 19.402 15 18.4
                             15L18.398 15.018C18.338 15.005 18.273 15 18.209 15H18C17.437 15 16.6 14.182 16.6 
                             13.631V12C16.6 9.464 14.537 7.4 12 7.4C9.463 7.4 7.4 9.463 7.4 12C7.4 14.537 9.463 16.6
                              12 16.6C13.234 16.6 14.35 16.106 15.177 15.313C15.826 16.269 16.93 17 18 17L18.002 
                              16.981C18.064 16.994 18.129 17 18.195 17H18.4C20.552 17 22 15.306 22 12.782V12C22 
                              6.486 17.514 2 12 2ZM12 14.599C10.566 14.599 9.4 13.433 9.4 11.999C9.4 
                              10.565 10.566 9.399 12 9.399C13.434 9.399 14.6 10.565 14.6 11.999C14.6 13.433 
                              13.434 14.599 12 14.599Z">
                            </path>
                        </svg>
                    </div>
                    <div className="dms-hbar-name">
                        <h3 className="dms-hbar-name-header">member name</h3>
                    </div>
                    <div className="dms-member-online-status">

                    </div>
                    <div className="dmshb-spacer"></div>
                    <div className="dmshb-tool-bar">


                        <div className="dmshb-tool-icon-wrapper">
                            <svg x="0" y="0" className="icon-phone" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M11 5V3C16.515 3 21 7.486 21 13H19C19 
                            8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 
                            11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 
                            22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 
                            14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z">
                                </path>
                            </svg>
                        </div>
                        <div className="dmshb-tool-icon-wrapper">
                            <svg x="0" y="0" className="icon-webcall" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M21.526 8.149C21.231 7.966 20.862 7.951
                             20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 
                             7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 
                             15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 
                             15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z">
                                </path>
                            </svg>
                        </div>
                        <div className="dmshb-tool-icon-wrapper">
                            <svg x="0" y="0" className="icon-pin-messages" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596
                             8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 
                             18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z">
                                </path>
                            </svg>
                        </div>
                        <div className="dmshb-tool-icon-wrapper">
                            <svg x="0" y="0" className="icon-add-members" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M21 3H24V5H21V8H19V5H16V3H19V0H21V3ZM10 
                            12C12.205 12 14 10.205 14 8C14 5.795 12.205 4 10 4C7.795 4 6 5.795 6 8C6 10.205 7.795 12 10 12ZM10 13C5.289 13
                             2 15.467 2 19V20H18V19C18 15.467 14.711 13 10 13Z">
                                </path>
                            </svg>
                        </div>
                        <div className="dmshbar-search-bar-wrapper">
                            <div className="dmshbar-search-bar-inner-wrapper">

                            </div>
                        </div>
                        <div className="dmshb-tool-icon-wrapper">

                        </div>
                        <div className="dmshb-tool-icon-wrapper">

                        </div>


                    </div>
                </div>
            </div>
        )
    }
}


export default DmServerHeaderNavBar;