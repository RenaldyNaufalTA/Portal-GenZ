import React, { useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Home/NewsList";
import Pagination from "@/Components/Home/Pagination";

export default function Home(props) {
    console.log(props);
    // console.log("user : ", props.news.data[0].user.name);
    return (
        <div className="w-full min-h-screen">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            {props.news.data && props.news.data.length > 0 ? (
                <>
                    <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4">
                        <NewsLists news={props.news.data} />
                    </div>
                    <div className="flex justify-center items-center pb-5">
                        <Pagination meta={props.news.meta} />
                    </div>
                </>
            ) : (
                <>
                    <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-4 mt-10">
                        <p className="text-4xl font-bold text-red-500 text-center">
                            News not found
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
