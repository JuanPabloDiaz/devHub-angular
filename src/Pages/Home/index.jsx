import { useState, useEffect } from "react"; // Hooks to consume the API
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  // UseState is a hook to add the info from the API to the state
  const [items, setItems] = useState([]); // State to store the data from the dummy API. It's an empty array because the data is an array of objects

  // UseEffect is a hook to fetch the data from the API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Data from Dummy API: ", json); // Log the data
        setItems(json.products); // Add the data to the state (setItems) and specify the data to be added (json.products)
      });
  }, []);

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
