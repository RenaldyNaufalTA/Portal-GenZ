const isNews = (news) => {
    return news.map((data, i) => {
        // console.log(data);
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={`https://picsum.photos/seed/${data.category
                            .replace(" ", "-")
                            .toLowerCase()}/500/400`}
                        alt={data.category}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="text-medium text-base truncate">
                        {data.body}
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">
                            {data.category}
                        </div>
                        <div className="badge badge-outline">
                            {data.user ? data.user.name : "Unknown"}
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noNews = () => {
    return <p>Tidak ada berita saat ini!</p>;
};

const NewsLists = ({ news }) => {
    // if (!news && !news.length) return noNews();
    // return isNews(news);
    return !news ? noNews() : isNews(news);
};

export default NewsLists;
