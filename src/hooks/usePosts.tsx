import { useEffect, useState } from "react";
import { api } from "../services/axios";
import { PostType, Repository } from "../types/PostType";

export function usePosts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  async function fetchPosts(query?: string) {
    return await api.get<Repository>("search/issues", {
      params: {
        q: query
      }
    });
  }

  useEffect(() => {
    fetchPosts("repo:Brenosalv/github-blog")
      .then(response => response.data.items)
      .then(setPosts)
      .catch(error => { console.error(error) })
  }, []);

  return posts;
}