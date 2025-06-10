import { memo } from 'react';
import "./style.scss"
import { formatter } from 'utils/formatter';
import { Quantity } from 'component';
import { FaWindowClose } from "react-icons/fa";
function ShoppingCart() {
    return (
        <>
            <div className='container'>
                <div className='table_cart'>
                    <table>
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='shopping__cart_item'>
                                    <img src='' alt='product-pic'/>
                                    <h4>Tên sản phẩm 1</h4>
                                </td>
                                <td>{formatter(200000)}</td>
                                <td><Quantity quantity="2" hasAddToCart={false}/></td>
                                <td>{formatter(400000)}</td>
                                <td className='icon_close'>
                                    <FaWindowClose />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default memo(ShoppingCart);