import { PostList } from "../../modules/PostList";
import { ProfileSummary } from "../../modules/ProfileSummary";
import { SearchInput } from "../../modules/SearchInput";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <ProfileSummary />
      <SearchInput />
      <PostList />
    </Container >
  )
}