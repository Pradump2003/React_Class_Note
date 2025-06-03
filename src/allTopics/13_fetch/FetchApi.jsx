import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [productsData, setProductsData] = useState(null);

  async function getProducts() {
    let resp = await fetch("https://fakestoreapi.in/api/products");
    let data = await resp.json();
    console.log(data);
    setProductsData(data);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <header className="p-3 bg-blue-300">
        <h1 className="text-center text-xl font-bold font-serif">
          All Products
        </h1>
      </header>
      <section className="p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData === null ? (
          <h2 className="text-center text-lg font-semibold">Loading</h2>
        ) : (
          productsData?.products.map((singleProduct) => {
            let { id, brand, category, description, image, price, title } =
              singleProduct;

            return (
              <div key={id} className="bg-white my-2 p-3 rounded shadow">
                <img src={image} alt="" height={300} width={300} />
                <h2 className="font-semibold">{title}</h2>
                <p className="font-light">{description.slice(0, 50)}....</p>

                <p className="font-light">Brand: {brand}</p>
                <p className="font-light">Price: Rs{price}</p>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default FetchApi;
