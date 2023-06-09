"use client";

import Post from "@/app/components/Post";
import { PostType } from "@/app/types/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type URL = {
  params: {
    slug: string;
  };
};

//Fetch all posts
const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

export default function PostDetail(url: URL) {
  const { data, isLoading } = useQuery<PostType[]>({
    queryFn: () => fetchDetails(url.params.slug),
    queryKey: ["detail-post"],
  });
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
