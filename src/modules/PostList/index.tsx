import { usePosts } from "../../hooks/usePosts";
import { Post } from "./Post";
import { Container } from "./styles";

export function PostList() {
  const posts = usePosts();

  return (
    <Container>
      {posts?.map((post) => (
        <Post key={post.id} postDetails={post} />
      ))}
    </Container>
  )
}