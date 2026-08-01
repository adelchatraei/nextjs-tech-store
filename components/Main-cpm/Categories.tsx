import CategoriItem, { Category } from "./CategoriItem";

const Categories = async () => {
    const response = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
    });
    const result = await response.json();

    return (
        <>
            <h2 className="text-xl font-bold text-center mb-8 uppercase tracking-widest text-[#1E293B]">
                Featured Categories
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {result.map((item: Category) => {
                    return <CategoriItem data={item} key={item._id} />;
                })}
            </div>
        </>
    );
};

export default Categories;
