import React from 'react';
import './Sidebar.scss';
import SidebarItem from '~/Components/SidebarItem/SidebarItem';
import product_list from '~/Assets/Images/Product_list_icon.svg';
import product_add from '~/Assets/Images/Product_Cart.svg';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarItem path="/" title="Sản phẩm" icon={<img src={product_list} alt="" />} />
            <SidebarItem path="/product/add" title="Thêm sản phẩm" icon={<img src={product_add} alt="" />} />
        </div>
    );
};

export default Sidebar;
