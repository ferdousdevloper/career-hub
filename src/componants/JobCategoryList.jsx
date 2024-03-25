import { useEffect, useState } from "react";
import Category from "./Category";


const JobCategoryList = () => {

    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data));
    },[])

    return (
        <div className="text-center container mx-auto">
            <h1 className="text-5xl">Job Category List {category.length}</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="md:grid grid-cols-4 gap-6 justify-center items-center mt-8">
                {
                    category.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;