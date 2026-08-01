import buildCategoryTree from "@/utils/buildCategoryTree";
import CategoryTree from "./CategoryTree";
import CategorySidebarProvider from "./context/CategorySidebarProvider";

type SideBarProp = {
    searchParams: Record<string, string | string[] | undefined>;
};

const Sidebar = ({ searchParams }: SideBarProp) => {
    const categories = [
        {
            _id: "1",
            name: "Electronics",
            slug: "electronics",
            parent: null,
        },
        {
            _id: "2",
            name: "Fashion",
            slug: "fashion",
            parent: null,
        },
        {
            _id: "3",
            name: "Home & Kitchen",
            slug: "home-kitchen",
            parent: null,
        },
        {
            _id: "4",
            name: "Accessories",
            slug: "accessories",
            parent: "1",
        },
        {
            _id: "8",
            name: "Mouse",
            slug: "mouse",
            parent: "4",
        },
        {
            _id: "9",
            name: "Keyboard",
            slug: "keyboard",
            parent: "4",
        },
        {
            _id: "10",
            name: "Headphones",
            slug: "headphones",
            parent: "4",
        },
        {
            _id: "11",
            name: "Wireless Mouse",
            slug: "wireless-mouse",
            parent: "8",
        },
        {
            _id: "12",
            name: "Gaming Mouse",
            slug: "gaming-mouse",
            parent: "8",
        },
        {
            _id: "13",
            name: "Mechanical Keyboard",
            slug: "mechanical-keyboard",
            parent: "9",
        },
        {
            _id: "14",
            name: "Membrane Keyboard",
            slug: "membrane-keyboard",
            parent: "9",
        },
        {
            _id: "15",
            name: "RGB Mechanical Keyboard",
            slug: "rgb-mechanical-keyboard",
            parent: "13",
        },
        {
            _id: "16",
            name: "Ultrabooks",
            slug: "ultrabooks",
            parent: "5",
        },
        {
            _id: "17",
            name: "Gaming Laptops",
            slug: "gaming-laptops",
            parent: "5",
        },
        {
            _id: "18",
            name: "Android Phones",
            slug: "android-phones",
            parent: "6",
        },
        {
            _id: "19",
            name: "iPhone",
            slug: "iphone",
            parent: "6",
        },
        {
            _id: "20",
            name: "Men",
            slug: "men",
            parent: "2",
        },
        {
            _id: "21",
            name: "Women",
            slug: "women",
            parent: "2",
        },
        {
            _id: "22",
            name: "Shoes",
            slug: "shoes",
            parent: "20",
        },
        {
            _id: "23",
            name: "Sneakers",
            slug: "sneakers",
            parent: "22",
        },
        {
            _id: "24",
            name: "Running Shoes",
            slug: "running-shoes",
            parent: "23",
        },
        {
            _id: "25",
            name: "Furniture",
            slug: "furniture",
            parent: "3",
        },
        {
            _id: "26",
            name: "Bedroom",
            slug: "bedroom",
            parent: "25",
        },
        {
            _id: "27",
            name: "Beds",
            slug: "beds",
            parent: "26",
        },
    ];

    const tree = buildCategoryTree(categories);

    return (
        <CategorySidebarProvider>
            <CategoryTree data={tree} searchParams={searchParams} />
        </CategorySidebarProvider>
    );
};

export default Sidebar;
