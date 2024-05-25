import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './SidebarItem.scss';

const SidebarItem = ({ path, title, icon }) => {
    return (
        <Link className="sidebar-item" to={path}>
            <div className="sidebar-item-icon">{icon}</div>
            <p>{title}</p>
        </Link>
    );
};

SidebarItem.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.node,
};

export default SidebarItem;
