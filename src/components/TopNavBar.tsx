import * as React from 'react';
import './TopNavBar.css';

class TopNavBar extends React.Component<{}, {}> {
    render() {
        return (
            <div className="top-bar">
                <ul className="top-bar-list">
                    <li className="top-bar-list-element first">
                        <p className="top-bar-list-element-text">OPCION 1</p>
                    </li>
                    <li className="top-bar-list-element"><p className="top-bar-list-element-text">Opción 1</p></li>
                    <li className="top-bar-list-element"><p className="top-bar-list-element-text">Opción 2</p></li>
                    <li className="top-bar-list-element"><p className="top-bar-list-element-text">Opción 3</p></li>
                    <li className="top-bar-list-element last"><p className="top-bar-list-element-text">Opción 1</p></li>
                </ul>
            </div>
        );
    }
}

export default TopNavBar;