import { useState, useEffect } from "react";


const useProduct = (filterCategory, limit, sortOrder) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const baseUrl = `https://fakestoreapi.com/products`

    const fetch_Products_and_Categories = async () => {

        try {
            let productsData;
            let categoryData;
            if (filterCategory) {
                const response = await fetch(
                    `${baseUrl}/category/${filterCategory}`
                );
                productsData = await response.json();
            } else if (limit) {
                const response = await fetch(
                    `${baseUrl}?limit=${limit}`
                );
                productsData = await response.json();
            } else {
                const response = await fetch(baseUrl);
                categoryData = await response.json();
            }
            const categoryResponse = await fetch(
                `${baseUrl}/categories`
            );
            categoryData = await categoryResponse.json();
            setProducts(productsData); // Update products based on category
            setCategories(categoryData); // Update categories

        } catch (error) {
            console.error("Failed to fetch products or categories:", error);
        }
    }

    useEffect(() => {
        fetch_Products_and_Categories()
    }, [filterCategory, limit, sortOrder]) // Trigger when filterCategory changes

    return { products, categories, setProducts };

}

export default useProduct;