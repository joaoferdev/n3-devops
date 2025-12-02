import request from "supertest";
import app from "../../app.js";

describe("Transaction API Integration", () => {

  it("POST /transactions deve criar", async () => {
    const res = await request(app)
      .post("/api/transactions")
      .send({
        title: "Teste",
        amount: 100,
        type: "entrada",
        category: "Geral",
        date: "2024-01-01"
      });

    expect(res.statusCode).toBe(201);
  });

  it("GET /transactions deve listar", async () => {
    const res = await request(app)
      .get("/api/transactions");

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

});
