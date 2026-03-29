// Mock user preferences data to replace expired Dicoding API

const users = {
  "1": {
    id: "1",
    name: "User 1",
    preference: {
      theme: "light",
      fontSize: "medium",
      fontStyle: "default",
      layoutWidth: "fullWidth",
    },
  },
  "2": {
    id: "2",
    name: "User 2",
    preference: {
      theme: "dark",
      fontSize: "large",
      fontStyle: "serif",
      layoutWidth: "mediumWidth",
    },
  },
  "3": {
    id: "3",
    name: "User 3",
    preference: {
      theme: "dark",
      fontSize: "small",
      fontStyle: "open-dyslexic",
      layoutWidth: "fullWidth",
    },
  },
};

export default users;
