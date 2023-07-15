import { PostContent } from "../../modules/PostContent";
import { PostSummary } from "../../modules/PostSummary";
import { Container } from "./styles";

export function Post() {
  return (
    <Container>
      <header>
        <PostSummary />
      </header>

      <main>
        <PostContent />
      </main>
    </Container>
  )
}