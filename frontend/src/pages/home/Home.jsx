import TravelTips from "../../components/travelTips/TravelTips";
import HomepageTopDestination from "../../components/homepageTopDestination/HomepageTopDestination.jsx";
import Choose from "../../components/whyChooseUsSection/WhyChooseUsSection.jsx";
import PropertyType from "../../components/propertyType/propertyType.jsx";
import Featured from "../../components/featured/Featured.jsx";

const Home = () => {
  return (
    <div>
      <HomepageTopDestination />
      <Choose />
      <PropertyType />
      <Featured />
      <TravelTips />
    </div>
  );
};
export default Home;
