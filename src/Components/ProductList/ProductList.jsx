import React from 'react';

import './ProductList.scss';
import data from '~/Assets/Images/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const ProductList = () => {
    const Category = {
        men: 'Nam',
        women: 'Nữ',
        kid: 'Trẻ em',
    };
    return (
        <div className="product-list">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ảnh</th>
                        <th>Tên</th>
                        <th>Giá mới</th>
                        <th>Giá cũ</th>
                        <th>Danh mục</th>
                        <th className="product-list-remove">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td className="product-list-img">
                                <img src={item.image} alt="" />
                            </td>
                            <td className="product-list-name">{item.name}</td>
                            <td className="product-list-price">
                                <p className="product-list-price_new">{item.new_price.toLocaleString('vi-VN')}</p>
                            </td>
                            <td className="product-list-price">
                                <p className="product-list-price_new">
                                    {item.old_price ? `${item.old_price.toLocaleString('vi-VN')}` : ''}
                                </p>
                            </td>
                            <td>
                                <p>{Category[item.category]}</p>
                            </td>
                            <td className="product-list-remove">
                                <button>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
