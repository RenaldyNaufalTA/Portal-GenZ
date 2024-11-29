import React, { useState, useEffect } from "react";
import { Head, router, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CreateNews(props) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            title,
            body,
            category,
        };
        router.post("/store-news", data);
        setTitle("");
        setBody("");
        setCategory("");
    };

    // console.log(props);
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={
                <h2 className="font-semibold text-xl text-white leading-tight">
                    Create News
                </h2>
            }
        >
            <Head title="Create News" />

            <div className="py-12">
                <div className="max-w-screen-md mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-base-100 shadow-sm sm:rounded-lg">
                        <div className="container mx-0 min-w-full flex flex-col items-end">
                            <Link
                                href={route("index-news")}
                                className="btn btn-sm bg-slate-500 border-none text-white text-base font-medium px-2 mx-3 hover:text-slate-400 hover:bg-slate-200"
                            >
                                Back
                            </Link>
                        </div>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text font-bold text-base text-white">
                                    Title
                                </span>
                            </div>
                            <input
                                type="text"
                                value={title}
                                placeholder="Input Title News"
                                className="input input-bordered input-info w-full bg-base-100 max-w-full lg:w-full"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                            />
                        </label>
                        <label className="form-control w-full mt-4">
                            <div className="label">
                                <span className="label-text font-bold text-base text-white">
                                    Body
                                </span>
                            </div>
                            <textarea
                                type="text"
                                value={body}
                                placeholder="Input Body News"
                                className="input input-bordered input-info w-full bg-base-100 h-32"
                                onChange={(body) => setBody(body.target.value)}
                            ></textarea>
                        </label>
                        <label className="form-control w-full mt-4">
                            <div className="label">
                                <span className="label-text font-bold text-base text-white">
                                    Category
                                </span>
                            </div>
                            <input
                                type="text"
                                value={category}
                                placeholder="Input Category News"
                                className="input input-bordered input-info w-full bg-base-100"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                            />
                        </label>

                        <button
                            className="btn text-white mt-6 bg-sky-500 hover:bg-sky-200 hover:text-black px-4 w-full"
                            onClick={() => handleSubmit()}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
