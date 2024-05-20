import { LinkItem } from "@/Interfaces/ILinkItem";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    created_at: string;
    due_date: string;
    status: string;
    image: string;
    createdBy: User;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    projects: {
        meta: {
            links: LinkItem[];
        };
        data: Project[];
    };
};
