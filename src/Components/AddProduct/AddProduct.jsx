import React, { useState } from 'react';
import './AddProduct.scss';
import upload_area from '~/Assets/Images/upload_area.svg';
import request from '~/Utils/httpRequest';

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        category: 'women',
        new_price: '',
        old_price: '',
    });

    const handleChange = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const imageHandle = (e) => {
        setImage(e.target.files[0]);
    };

    const addProduct = async () => {
        try {
            let responseData;

            let formData = new FormData();
            formData.append('product', image);

            const response = await request({
                method: 'POST',
                url: 'upload',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                data: formData,
            });

            responseData = response.data;
            if (!responseData.success) {
                alert('Thêm ảnh thất bại');
                return;
            }

            const product = { ...productDetails, image: `https://apiclothes.xsubuntu.click/${responseData.image_url}` };
            const responseAdd = await request({
                method: 'POST',
                url: 'product/addproduct',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                data: product,
            });

            responseAdd.data.success ? alert('Thêm thành công') : alert('Thêm thất bại');
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="add-product">
            <div className="row">
                <div className="add-product-itemfield col-12">
                    <p>Tên sản phẩm</p>
                    <input onChange={handleChange} type="text" name="name" placeholder="Tên sản phẩm" />
                </div>
                <div className="add-product-itemfield col-6">
                    <p>Đơn giá</p>
                    <input onChange={handleChange} type="text" name="new_price" placeholder="Đơn giá" />
                </div>

                <div className="add-product-itemfield col-6">
                    <p>Giá cũ</p>
                    <input onChange={handleChange} type="text" name="old_price" placeholder="Giá cũ" />
                </div>
                <div className="add-product-itemfield">
                    <p>Danh mục</p>
                    <select onChange={handleChange} name="category" className="add-product-selector">
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
                <button onClick={addProduct} className="add-product-btn">
                    Thêm
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
