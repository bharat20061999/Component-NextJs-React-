import { MainLayout } from "./components/main-layout/main-layout";
import { SectionContainer } from "./components/section-container/section-container";
import { IntroSection } from "./sections/intro/intro.section";
import { SectionIdEnum } from "./types";

const sections = [
  {
    sectionId: SectionIdEnum.intro,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.about,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.skills,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.projects,
    component: <IntroSection />,
  },
  {
    sectionId: SectionIdEnum.contact,
    component: <IntroSection />,
  },
];

const Main: React.FC = () => {
  return (
    <MainLayout>
      {sections.map(({ component, sectionId }) => {
        return (
          <SectionContainer sectionId={sectionId} key={sectionId}>
            {component}
          </SectionContainer>
        );
      })}
    </MainLayout>
  );
};

export default Main;
