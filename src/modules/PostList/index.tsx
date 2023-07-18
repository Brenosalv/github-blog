import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { PostsContext } from "../../contexts/PostsContext";
import { Post } from "./Post";
import { Container } from "./styles";

export function PostList() {
  const { posts } = useContext(PostsContext);
  const form = useFormContext();

  return (
    <Container>
      {form.formState.isSubmitting ? (
        <LoadingIndicator />
      ) : (
        posts?.map((post) => (
          <Post key={post.id} postDetails={post} />
        ))
      )
      }
    </Container>
  )
}