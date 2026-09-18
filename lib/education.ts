export type Education = {
  /** CalVer tag: completion month. */
  version: string;
  degree: string;
  school: string;
  location: string;
  span: string;
  expected?: boolean;
};

export const education: Education[] = [
  {
    version: "2027.08",
    degree: "Executive Master of Science in Artificial Intelligence",
    school: "University of the Cumberlands",
    location: "Kentucky",
    span: "Expected Aug 2027",
    expected: true,
  },
  {
    version: "2022.12",
    degree: "Master of Science in Information Systems",
    school: "Northeastern University",
    location: "Boston, MA",
    span: "Jan 2021 – Dec 2022",
  },
  {
    version: "2016.06",
    degree: "Bachelor of Engineering in Information Technology",
    school: "LNCT",
    location: "Bhopal, India",
    span: "Aug 2012 – Jun 2016",
  },
];
