import { useState, useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import PlanSection from "../components/sections/PlanSection";
import BridesandGroom from "../components/sections/BridesandGroom";
import SuccessStories from "../components/sections/SuccessStories";
import { getHomePageData } from "../data/loader";

export default function Home() {
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
    <div>
      <HeroSection response={data} />
      <PlanSection />
      <BridesandGroom />
      <AboutSection />
      <SuccessStories />
    </div>
  );
}
