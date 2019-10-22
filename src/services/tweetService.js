const tweets = [
  {
    id: 1,
    author: "reactjs",
    title: "React 16.9",
    content:
      "React 16.9 is now available! It contains several new features, bugfixes, and new deprecation warnings to help prepare for a future major release."
  },
  {
    id: 2,
    author: "AcademieDijon",
    title: "Concours de lecture",
    content:
      "@EducationFrance @GrandeLibrairie et @Francetele lancent un grand concours national de lecture à voix haute pour tous les élèves de collège et lycée.",
    createdAt: "2019-10-22T10:30:50.926Z"
  },
  {
    id: 3,
    author: "codeconcept",
    title: "First Tweet!",
    content: "Everything is in the title",
    createdAt: "2019-10-21T10:29:47.199Z"
  },
  {
    id: 4,
    author: "codeconcept",
    title: "The Big Three",
    content: "React, Angular and Vue ;)",
    createdAt: "2019-10-22T10:30:50.926Z"
  }
];

export const getTweets = () => {
  return tweets;
};
