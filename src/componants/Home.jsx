import Banner from "./Banner";
import FeaturedJob from "./FeaturedJob";
import JobCategoryList from "./JobCategoryList";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJob></FeaturedJob>
            <h1>Home section</h1>
        </div>
    );
};

export default Home;