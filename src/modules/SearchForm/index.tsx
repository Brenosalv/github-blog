import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../../components/Input";
import { PostsContext } from "../../contexts/PostsContext";
import { SearchFormInputs } from "../../types/SearchForm";
import { Container } from "./styles";

export function SearchForm() {
  const form = useFormContext<SearchFormInputs>();
  const { posts, fetchPosts } = useContext(PostsContext);

  const numberOfPosts = posts.length;

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Container onSubmit={form.handleSubmit(handleSearchPosts)}>
      <header>
        <h3>
          Posts
        </h3>

        <span>
          {numberOfPosts > 1 ? `${numberOfPosts} posts` : `${numberOfPosts} post`}
        </span>
      </header>

      <main>
        <Controller
          control={form.control}
          name="query"
          render={({ field: { onChange, value } }) => (
            <Input
              type="text"
              placeholder="Search content"
              onChange={onChange}
              value={value}
            />
          )}
        />
      </main>
    </Container>
  )
}
