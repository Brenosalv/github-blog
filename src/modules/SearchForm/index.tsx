import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../../components/Input";
import { PostsContext } from "../../contexts/PostsContext";
import { SearchFormInputs } from "../../types/SearchForm";
import { Container } from "./styles";

export function SearchForm() {
  const form = useFormContext<SearchFormInputs>();
  const { fetchPosts } = useContext(PostsContext);

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
          6 posts
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
