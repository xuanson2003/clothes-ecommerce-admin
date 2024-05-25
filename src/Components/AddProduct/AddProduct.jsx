import React, { useState } from 'react';
import './AddProduct.scss';
import upload_area from '~/Assets/Images/upload_area.svg';

const AddProduct = () => {
    const [image, setImage] = useState(false);

    const imageHandle = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="add-product">
            <div className="row">
                <div className="add-product-itemfield col-12">
                    <p>Tên sản phẩm</p>
                    <input type="text" name="name" placeholder="Tên sản phẩm" />
                </div>
                <div className="add-product-itemfield col-6">
                    <p>Đơn giá</p>
                    <input type="text" name="old_price" placeholder="Đơn giá" />
                </div>

                <div className="add-product-itemfield col-6">
                    <p>Giá cũ</p>
                    <input type="text" name="new_price" placeholder="Giá cũ" />
                </div>
                <div className="add-product-itemfield">
                    <p>Danh mục</p>
                    <select name="category" className="add-product-selector">
                        <option value="">Chọn danh mục</option>
                        <option value="women">Nữ</option>
                        <option value="men">Nam</option>
                        <option value="kid">Trẻ em</option>
                    </select>
                </div>
                <div className="add-product-itemfield">
                    <label htmlFor="file-input">
                        <img
                            src={image ? URL.createObjectURL(image) : upload_area}
                            className="add-product-thumnail-img"
                            alt=""
                        />
                    </label>
                    <input onChange={imageHandle} type="file" name="image" id="file-input" hidden />
                </div>
                <button className="add-product-btn">Thêm</button>
            </div>
        </div>
    );
};

export default AddProduct;
