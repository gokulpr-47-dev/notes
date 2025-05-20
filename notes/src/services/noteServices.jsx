import api from "../../config/axios";

export const createNote = async (noteData) => {
  const response = await api.post("/notes", noteData);
  return response.data;
};

export const fetchNotes = async () => {
  const response = await api.get("/notes");
  return response.data;
};
