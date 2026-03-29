import express from "express";
import tutorials from "../data/mockTutorials.js";
import users from "../data/mockUsers.js";

const router = express.Router();

// GET /api/tutorials/:tutorialId — mock Dicoding tutorial endpoint
router.get("/tutorials/:tutorialId", (req, res) => {
  const { tutorialId } = req.params;
  const tutorial = tutorials[tutorialId];

  if (!tutorial) {
    return res.status(404).json({
      status: "fail",
      message: `Tutorial dengan ID ${tutorialId} tidak ditemukan`,
    });
  }

  return res.json({
    status: "success",
    message: "Tutorial berhasil ditemukan",
    data: {
      id: tutorial.id,
      title: tutorial.title,
      content: tutorial.content,
    },
  });
});

// GET /api/users/:userId/preferences — mock Dicoding user preferences endpoint
router.get("/users/:userId/preferences", (req, res) => {
  const { userId } = req.params;
  const user = users[userId];

  if (!user) {
    // Return default preferences for unknown users
    return res.json({
      status: "success",
      data: {
        preference: {
          theme: "light",
          fontSize: "medium",
          fontStyle: "default",
          layoutWidth: "fullWidth",
        },
      },
    });
  }

  return res.json({
    status: "success",
    data: {
      preference: user.preference,
    },
  });
});

export default router;
