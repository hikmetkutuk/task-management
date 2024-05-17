import { Link } from "@inertiajs/react";
import React from "react";
import {LinkItem} from "@/Interfaces/ILinkItem";

interface PaginationProps {
    links: {
        links: LinkItem[];
    };
}

const Pagination: React.FC<PaginationProps> = ({ links }) => {
    return (
        <nav className="text-center mt-4">
            {links.links.map((link) => (
                <Link
                    preserveScroll
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
                        (link.active ? "bg-gray-950 " : " ") +
                        (!link.url
                            ? "!text-gray-500 cursor-not-allowed "
                            : "hover:bg-gray-950")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
};

export default Pagination;
