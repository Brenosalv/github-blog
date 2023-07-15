import arrowUpRightFromSquareSolidIcon from "../../assets/icons/arrow-up-right-from-square-solid.svg";
import calendarDaySolidIcon from "../../assets/icons/calendar-day-solid.svg";
import chevronLeftSolidIcon from "../../assets/icons/chevron-left-solid.svg";
import commentSolidIcon from "../../assets/icons/comment-solid.svg";
import githubIcon from "../../assets/icons/github.svg";
import { Box } from "../../components/Box";
import { ContentContainer } from "./styles";

export function PostSummary() {
  return (
    <Box>
      <ContentContainer>
        <header>
          <span>
            <img
              src={chevronLeftSolidIcon}
              alt=""
              width={12}
              height={12}
            />
            Back
          </span>

          <span>
            See on Github
            <img
              src={arrowUpRightFromSquareSolidIcon}
              alt=""
              width={12}
              height={12}
            />
          </span>
        </header>

        <main>
          <h1>
            JavaScript data types and data structures
          </h1>
        </main>

        <footer>
          <span>
            <img
              src={githubIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>camaronwll</p>
          </span>

          <span>
            <img
              src={calendarDaySolidIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>1 day ago</p>
          </span>

          <span>
            <img
              src={commentSolidIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>5 comments</p>
          </span>
        </footer>
      </ContentContainer>
    </Box >
  )
}