'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import styles from './style.module.css'

const Product = () => {
    const params = useParams()

    const [product, setProduct] = useState()
    // lúc này đang undefine => đang load trang không load dữ liệu khi load xong dữ liệu 
    const [quantity, setQuantity] = useState(1)

    async function fetchProduct() {
        const response = await fetch(`https://form-test-api.vercel.app/api/product?id=${params.id}`)
        const product = await response.json()
        setProduct(product)
    }

    // sau khi fecth xong thì nó sẽ là 1 cái object => true trang div đc hiển thị ra

    useEffect(() => {
        fetchProduct()
    }, [])

    function handleQuantityInputChange(value) {
        setQuantity(value)
    }

    function handleDecreaseBtn() {
        // setQuantity(quantity - 1)
        // setQuantity(quantity - 1)
        setQuantity(prev => prev - 1)
        // setQuantity(prev => prev - 1)
    }

    function handleIncreaseBtn() {
        setQuantity(prev => prev + 1)
    }

    async function handleAddToCart() {
        const response = await fetch('https://form-test-api.vercel.app/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Định dạng dữ liệu gửi lên là JSON
            },
            body: JSON.stringify({
                userId: 'khanh01',
                productId: product.id,
                quantity: quantity
            })
        })

        if (response.status === 200) {
            alert('Thêm vào giỏ hàng thành công')
        } else {
            alert('Thêm vào giỏ hàng thất bại')
        }
    }

    return (
        <>
            {
                // Thủ Thuật(Tip): khi product ban đầu là undefine => false thì cái div trong nó false luôn
                product && (
                    <div>
                        <h1>Product Id: {product.id}</h1>
                        <p className="text-2xl text-green-500 hover:text-red-900">Product Name: {product.name}</p>
                        <img src={product.imgurl} width={200} height={200} />
                        <p>Product Price: {product.price}</p>
                        <div className='cart-container'>
                            <button className={styles['btn-decrease']} onClick={handleDecreaseBtn}>-</button>
                            <input value={quantity} onChange={(e) => handleQuantityInputChange(Number(e.target.value))} />
                            {/*  
                                Các hàm sự kiện (onChange, onClick, ...) luôn nhận 1 tham số là event
                                event.target: dùng để lấy phần tử gây ra sự kiện đó
                            */}
                            <button className={styles['btn-increase']} onClick={handleIncreaseBtn}>+</button>
                            <button className='btn-add-to-cart' onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Product