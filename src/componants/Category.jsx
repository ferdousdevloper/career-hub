

const Category = ({category}) => {
    const {logo, category_name, availability} = category
    return (
        <div className="bg-[#7E90FE0D] text-left p-10 rounded-lg mb-4 max-sm:flex flex-col items-center">
            <img className="bg-[#7E90FE1A] p-4 rounded-lg" src={logo} alt="" />
            <h3 className="text-xl font-extrabold font-[Dark 02] mt-8" >{category_name}</h3>
            <p className="text-[#A3A3A3] font-medium mt-3">{availability}</p>
        </div>
    );
};

export default Category;