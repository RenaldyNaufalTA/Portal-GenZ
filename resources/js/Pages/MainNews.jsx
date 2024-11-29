import React, { useState, useEffect } from "react";
import { Head, router, Link } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import TableNews from "@/Components/News/TableNews";
import Pagination from "@/Components/Home/Pagination";
import "../../../public/css/style.css";

export default function MainNews(props) {
    const [isNotif, setIsNotif] = useState(false);

    useEffect(() => {
        if (props.flash.message) {
            setIsNotif(true);
            setInterval(() => {
                setIsNotif(false);
            }, 4000);
        }
    }, []);
    // console.log(props);
    return (
        <Authenticated
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    My News
                </h2>
            }
        >
            <Head title="My News" />

            <div className="py-12">
                {isNotif && (
                    <div className="toast toast-top toast-end" id="notif">
                        <div className="alert flex alert-success text-white text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="me-3 ms-0">
                                {props.flash.message}
                            </span>
                        </div>
                    </div>
                )}
                <div className="max-w-screen-xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 mt-5 bg-white text-slate-900 shadow-sm sm:rounded-lg  md:mx-5">
                        <div className="flex">
                            <h5 className="font-bold me-auto text-xl mb-3 mt-1 ms-3">
                                My News
                            </h5>
                            <Link
                                href={route("create-news")}
                                className="btn-create"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-file-earmark-plus-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0" />
                                </svg>
                            </Link>
                        </div>

                        <TableNews myNews={props.myNews.data} />
                        <div className="flex justify-end items-end pt-7 pb-3">
                            <Pagination meta={props.myNews} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
