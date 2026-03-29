import tutorials from "../data/mockTutorials.js";

export const getTutorialContent = async (tutorialId) => {
  const tutorial = tutorials[tutorialId];

  if (!tutorial) {
    throw new Error(`Tutorial dengan ID ${tutorialId} tidak ditemukan dalam mock data`);
  }

  return tutorial.content;
};
