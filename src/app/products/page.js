'use client'
import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductItem from "./ProductItems";

const Products = () => {

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [products, setProducts] = useState([])

    function handlePreviousBtn() {
        if (page > 1) {
            setPage(page => page - 1)
        }
    }
    function handleNextBtn() {
        if (page < totalPages) {
            setPage(page => page + 1)
        }
    }

    async function fetchProducts(page) {
        const response = await fetch(`https://form-test-api.vercel.app/api/products?page=${page}`)
        const data = await response.json()
        setTotalPages(data.totalPages)
        setProducts(data.products)
    }
    useEffect(() => {
        fetchProducts(page)
    }, [page])

    return (
        <div>
            <Header />
            <h1 className="bg-midnight">Products</h1>
            <h1 className="bg-orange-500 text-white text-center">Hello</h1>
            <ul>
                {
                    products.map((product) => {
                        return (
                            <ProductItem key={product.id} product={product} />
                        )
                    })
                }
            </ul>
            <p>Page: {page} / {totalPages} </p>
            <button onClick={handlePreviousBtn}>Previous</button>
            <button onClick={handleNextBtn}>Next</button>
            <Footer />
        </div>
    )
}

export default Products