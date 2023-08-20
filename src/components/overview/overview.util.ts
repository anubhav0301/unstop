import svgs from "../../assets/svgs";

export const overviewData = [
  {
    heading: "Total Assessment",
    icon: svgs.stack,
    data: [
      {
        count: "34",
        description: "",
      },
    ],
  },
  {
    heading: "Candidates",
    icon: svgs.users,
    data: [
      {
        count: "11,145",
        description: "Total Candidate",
        increment: '+89',
      },
      {
        count: "1,14",
        description: "Who Attempted",
        increment: '+89',
      },
    ],
  },
  {
    heading: "Candidates Source",
    icon: svgs.globe,
    data: [
      {
        count: "11,000",
        description: "E-mail",
        increment: '+89',
      },
      {
        count: "145",
        description: "Social Share",
        increment: '+89',
      },
      {
        count: "145",
        description: "Unique Link",
        increment: '+89',
      },
    ],
  },
  {
    heading: "Total Purpose",
    icon: svgs.attachementWithBg,
    data: [{ count: 11, description: "" }],
  },
];
