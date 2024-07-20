import React, { useEffect, useMemo, useState } from "react";
import "../../assets/css/component/Blog/BlogList/BlogList.scss";
import BlogContainerLarge from "./BlogContainerLarge";
import blogItemData from "../ComponentAPI/blogItemAPI";
import Pagination from "../../ui/Pagination";

// * It will sort the blog data based on date created.
const sortedBlogData = blogItemData.sort(
  (a, b) =>
    new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime()
);

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const [pageSize, setPageSize] = useState(9);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    if (width < 992) setPageSize(8);
    else setPageSize(9);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const currentBlogData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return sortedBlogData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, pageSize]);

  return (
    <section className="blog_list_sec pb-3">
      <div className="container">
        <BlogContainerLarge data={currentBlogData} />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={blogItemData.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </section>
  );
};

export default BlogList;
