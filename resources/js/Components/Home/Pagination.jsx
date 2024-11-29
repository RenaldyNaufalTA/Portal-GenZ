import { Link } from "@inertiajs/react";

const Pagination = ({ meta }) => {
    const current = meta.current_page;
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;

    return (
        <div className="join">
            {prev && (
                <Link
                    href={prev}
                    className="join-item btn border-none bg-slate-300 text-black hover:bg-slate-200 "
                >
                    «
                </Link>
            )}

            <button className="join-item btn bg-slate-300 text-black hover:bg-slate-200 border-none">
                {current}
            </button>
            {next && (
                <Link
                    href={next}
                    className="join-item btn bg-slate-300 text-black hover:bg-slate-200 border-none"
                >
                    »
                </Link>
            )}
        </div>
    );
};
export default Pagination;
