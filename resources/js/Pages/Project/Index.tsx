import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";

export default function Index({ auth, projects }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">ID</th>
                                        <th className="px-3 py-3">Image</th>
                                        <th className="px-3 py-3">Name</th>
                                        <th className="px-3 py-3">Status</th>
                                        <th className="px-3 py-3">
                                            Created Date
                                        </th>
                                        <th className="px-3 py-3">Due Date</th>
                                        <th className="px-3 py-3">
                                            Created By
                                        </th>
                                        <th className="px-3 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.data.map((project: any) => (
                                        <tr
                                            key={project.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <td className="px-3 py-2">
                                                {project.id}
                                            </td>
                                            <td className="px-3 py-2">
                                                <img
                                                    src={project.image}
                                                    style={{ width: 50 }}
                                                    alt=""
                                                />
                                            </td>
                                            <td className="px-3 py-2">
                                                {project.name}
                                            </td>
                                            <td className="px-3 py-2 text-nowrap">
                                                <span
                                                    className={
                                                        "px-2 py-1 rounded text-white " +
                                                        PROJECT_STATUS_CLASS_MAP[
                                                            project.status as keyof typeof PROJECT_STATUS_CLASS_MAP
                                                        ]
                                                    }
                                                >
                                                    {
                                                        PROJECT_STATUS_TEXT_MAP[
                                                            project.status as keyof typeof PROJECT_STATUS_TEXT_MAP
                                                        ]
                                                    }
                                                </span>
                                            </td>
                                            <td className="px-3 py-2">
                                                {project.created_at}
                                            </td>
                                            <td className="px-3 py-2">
                                                {project.due_date}
                                            </td>
                                            <td className="px-3 py-2">
                                                {project.createdBy.name}
                                            </td>
                                            <td className="px-3 py-2">
                                                <Link
                                                    href={route(
                                                        "project.edit",
                                                        project.id,
                                                    )}
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "project.destroy",
                                                        project.id,
                                                    )}
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={projects.meta} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
