/* eslint-disable react-hooks/static-components */
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type ProductBreadcrumbProps = {
    category: string;
    name: string;
};

const ProductBreadcrumb = ({ category, name }: ProductBreadcrumbProps) => {
    const Separator = () => <ChevronRight size={10} className="shrink-0" />;
    return (
        <nav>
            <ol className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap py-3 no-scrollbar border-b border-gray-100 sm:border-0 px-2 sm:px-0">
                <li>
                    <Link
                        href="/"
                        className="hover:text-primary transition-colors shrink-0"
                    >
                        Home
                    </Link>
                </li>
                <Separator />
                <li>
                    <Link
                        href="/products"
                        className="hover:text-primary transition-colors shrink-0"
                    >
                        Products
                    </Link>
                </li>
                <Separator />
                <li>
                    <span className="text-gray-400 shrink-0">{category}</span>
                </li>
                <Separator />
                <li>
                    <span className="font-bold text-slate-800 truncate">
                        {name}
                    </span>
                </li>
            </ol>
        </nav>
    );
};

export default ProductBreadcrumb;

// category:string , name:string
//  {items.map((item, index) => {
//           const isLast = index === items.length - 1;

//           return (
//             <li key={item.href} className="flex items-center">
//               {/* اگر آخرین آیتم نیست، لینک بگذار */}
//               {!isLast ? (
//                 <>
//                   <Link
//                     href={item.href}
//                     className="hover:text-blue-600 transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                   <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
//                 </>
//               ) : (
//                 /* اگر آخرین آیتم است، فقط متن (معمولاً بولد) */
//                 <span className="font-semibold text-gray-900" aria-current="page">
//                   {item.label}
//                 </span>
//               )}
//             </li>
//           );
//         })}
