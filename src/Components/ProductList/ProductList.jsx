import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import './ProductList.scss';
import request from '~/Utils/httpRequest';

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const Category = {
        men: 'Nam',
        women: 'Nữ',
        kid: 'Trẻ em',
    };

    const getProductList = async () => {
        try {
            const response = await request.get('product/allproducts');
            setAllProducts(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProductList();
    }, []);

    const removeProduct = async (id) => {
        try {
            await request({
                method: 'DELETE',
                url: 'product/removeproduct',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: { id: id },
            });
            await getProductList();
        } catch (err) {
            console.log(err);
        }
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
                    {allProducts.map((item) => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
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
                                <button
                                    onClick={() => {
                                        removeProduct(item._id);
                                    }}
                                >
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
