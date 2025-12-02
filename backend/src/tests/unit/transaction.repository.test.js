import repo from "../../modules/transaction/transaction.repository.js";
import Transaction from "../../modules/transaction/transaction.model.js";

jest.mock("../../modules/transaction/transaction.model.js");

describe("Transaction Repository", () => {

  it("create() deve chamar Transaction.create", async () => {
    Transaction.create.mockResolvedValue({ title: "Teste" });

    const result = await repo.create({ title: "Teste" });

    expect(Transaction.create).toHaveBeenCalled();
    expect(result.title).toBe("Teste");
  });

});
