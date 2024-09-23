"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/productData.json");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        // Add category data for filtering

        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostsContext.Provider>
  );
};

// Custom hook to use the Posts context
export const usePosts = () => useContext(PostsContext);
