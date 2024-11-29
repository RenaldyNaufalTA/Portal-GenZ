import React, { useState, useEffect } from "react";
import { Head, router, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function CreateNews({ news, auth }) {
    // console.log(news);
    const [title, setTitle] = useState(news.title);
    const [body, setBody] = useState(news.body);
    const [category, setCategory] = useState(news.category);

    const handleSubmit = () => {
        const data = {
            title,
            body,
            category,
        };
        router.put("/update-news/" + news.id, data);
        // setTitle("");
        // setBody("");
        // setCategory("");
    };

    // console.log(props);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit News
                </h2>
            }
        >
            <Head title="Edit News" />

            <div className="py-12">
                <div className="max-w-screen-md mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white text-black  shadow-sm sm:rounded-lg">
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
                                <span className="label-text font-bold text-base text-slate-900">
                                    Title
                                </span>
                            </div>
                            <input
                                type="text"
                                value={title}
                                placeholder="Input Title News"
                                autoFocus
                                className="input input-bordered input-info w-full bg-white max-w-full lg:w-full"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                            />
                        </label>
                        <label className="form-control w-full mt-4">
                            <div className="label">
                                <span className="label-text font-bold text-base text-slate-900">
                                    Body
                                </span>
                            </div>
                            <textarea
                                type="text"
                                value={body}
                                placeholder="Input Body News"
                                className="input input-bordered input-info w-full bg-white h-32"
                                onChange={(body) => setBody(body.target.value)}
                            ></textarea>
                        </label>
                        <label className="form-control w-full mt-4">
                            <div className="label">
                                <span className="label-text font-bold text-base text-slate-900">
                                    Category
                                </span>
                            </div>
                            <input
                                type="text"
                                value={category}
                                placeholder="Input Category News"
                                className="input input-bordered input-info w-full bg-white"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                            />
                        </label>

                        <button
                            className="btn text-white mt-6 btn-primary px-4 w-full"
                            onClick={() => handleSubmit()}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
