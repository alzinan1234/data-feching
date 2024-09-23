"use client";

import React, { useState } from "react";
import { usePosts } from "../app/Shared/PostsProvider"; // Adjust the import path

export const AllData = () => {
  const { posts, loading, error } = usePosts();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const allcategory = ["t-shirt", "pent", "panjabi"];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Handle input change
  const handleFilterChange = (e) => {
    setCategoryFilter(e);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Filter posts
  const filteredPosts = posts.filter((post) =>
    post.category.toLowerCase().includes(categoryFilter.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  return (
    <div>
      <div className="flex gap-5 my-5 justify-center">
        {allcategory?.map((item, index) => (
          <button
            onClick={() => handleFilterChange(item)}
            className="p-2 bg-blue-700 "
            key={index}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-5">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div
              className="p-5 border-2 border-blue-500 h-[300px] relative"
              key={post.id}
            >
              <h2>{post.name}</h2>
              <img
                src={post.image1}
                alt={post.name}
                className="mb-2 h-[200px] w-[100%]"
              />
              <p>
                <strong>Price:</strong> ${post.price}
              </p>
              <p>
                <strong>Sizes:</strong> {post.sizes.join(", ")}
              </p>
              <p>
                <strong>Category:</strong> {post.category}
              </p>

              <button className=" p-2 bg-amber-800 text-white">
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 bg-blue-500 text-white"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="p-2 bg-blue-500 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};
