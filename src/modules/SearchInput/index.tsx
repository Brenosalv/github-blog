import { Container } from "./styles";

export function SearchInput() {
  return (
    <Container>
      <header>
        <h3>
          Posts
        </h3>

        <span>
          6 posts
        </span>
      </header>

      <main>
        <input
          type="text"
          placeholder="Search content"
        />
      </main>
    </Container>
  )
}