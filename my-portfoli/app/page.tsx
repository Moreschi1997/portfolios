import HomePage from "./component/homepage";
import Experience from "./component/experiencehome";
import StackUtilization from "./component/stackutilization";
import Welcome from "./component/sectionwelcome";
import Contact from "./component/contact";

export default function Home() {
  return (
    <>
        <Welcome />
        <HomePage />
        <Experience />
        <StackUtilization />
        <Contact />
    </>
  )
}