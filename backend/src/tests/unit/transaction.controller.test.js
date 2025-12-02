import controller from "../../modules/transaction/transaction.controller.js";
import * as service from "../../modules/transaction/transaction.service.js";

jest.mock("../../modules/transaction/transaction.service.js");

describe("Transaction Controller", () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
    send: jest.fn()
  };

  const next = jest.fn();

  it("create deve retornar 201", async () => {
    service.createTransaction.mockResolvedValue({ id: 1 });

    await controller.create({ body: {} }, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
  });
});
