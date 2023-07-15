import arrowUpRightFromSquareSolidIcon from "../../assets/icons/arrow-up-right-from-square-solid.svg";
import buildingSolidIcon from "../../assets/icons/building-solid.svg";
import githubIcon from "../../assets/icons/github.svg";
import userGroupSolidIcon from "../../assets/icons/user-group-solid.svg";
import { Box } from "../../components/Box";
import {
  Avatar,
  ProfileInfoContainer
} from "./styles";

export function ProfileSummary() {
  return (
    <Box>
      <Avatar
        src="https://europeanwomen.net/wp-content/uploads/2021/05/dutch2.jpg"
        alt="Profile avatar"
        width={148}
        height={148}
      />

      <ProfileInfoContainer>
        <header>
          <h1>
            Sofia Vergara
          </h1>

          <span>
            <p>
              GITHUB
            </p>

            <img
              src={arrowUpRightFromSquareSolidIcon}
              alt=""
              width={12}
              height={12}
            />
          </span>
        </header>

        <main>
          <h2>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </h2>
        </main>

        <footer>
          <div>
            <img
              src={githubIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>camaronwll</p>
          </div>

          <div>
            <img
              src={buildingSolidIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>Rocketseat</p>
          </div>

          <div>
            <img
              src={userGroupSolidIcon}
              alt=""
              width={18}
              height={18}
            />
            <p>32 followers</p>
          </div>
        </footer>
      </ProfileInfoContainer>
    </Box>
  )
}