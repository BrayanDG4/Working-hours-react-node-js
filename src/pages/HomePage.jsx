import { CardSection } from "../components/CardSection"
import { GetStartedSection } from "../components/GetStartedSection"
import { MainSection } from "../components/MainSection"
import { NavBar } from "../components/NavBar"

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <MainSection />
      <CardSection/>
      <GetStartedSection/>
    </>
  )
}
