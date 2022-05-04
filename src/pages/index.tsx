import { Container } from "../components/Container";

import { DarkModeSwitch } from "../components/DarkModeSwitch";
import MyBox from "../components/MyBox";
import Posts from "../components/Posts";

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />
    <MyBox />
    <Posts />
  </Container>
);

export default Index;
