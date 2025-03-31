import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { getHomePageData } from "../../data/loader";

const Layout = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function to fetch data and update state.
    async function fetchData() {
      try {
        const response = await getHomePageData();
        setData(response);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    // Call the async function.
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: Failed to load data.</div>;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header response={data} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
