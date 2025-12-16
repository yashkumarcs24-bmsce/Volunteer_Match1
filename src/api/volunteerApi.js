import api from "./axios";

// -----------------------------
// AUTH APIs
// -----------------------------
export const registerVolunteer = (data) =>
  api.post("/auth/register", data);

export const loginVolunteer = (data) =>
  api.post("/auth/login", data);

// -----------------------------
// VOLUNTEER CRUD APIs
// -----------------------------
export const createVolunteer = (data) =>
  api.post("/volunteers", data);

export const getVolunteers = () =>
  api.get("/volunteers");

export const getVolunteerById = (id) =>
  api.get(`/volunteers/${id}`);

export const updateVolunteer = (id, data) =>
  api.put(`/volunteers/${id}`, data);

export const deleteVolunteer = (id) =>
  api.delete(`/volunteers/${id}`);
