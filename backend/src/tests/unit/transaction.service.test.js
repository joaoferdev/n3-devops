import * as service from "../../modules/transaction/transaction.service.js";
import repo from "../../modules/transaction/transaction.repository.js";

// Mock do repositório
jest.mock("../../modules/transaction/transaction.repository.js");

describe("Transaction Service", () => {

  it("deve criar uma transação válida", async () => {
    repo.create.mockResolvedValue({ title: "Salário", amount: 100 });

    const result = await service.createTransaction({
      title: "Salário",
      amount: 100,
      type: "entrada",
      category: "Trabalho",
      date: "2024-01-10"
    });

    expect(result.title).toBe("Salário");
  });

  it("deve falhar ao criar transação inválida", async () => {
    await expect(service.createTransaction({}))
      .rejects
      .toThrow("Título inválido");
  });

  it("deve listar com filtros", async () => {
    repo.find.mockResolvedValue([]);

    await service.listTransactions({ type: "entrada" });

    expect(repo.find).toHaveBeenCalledWith({ type: "entrada" });
  });

  it("deve falhar ao atualizar transação inexistente", async () => {
    repo.update.mockResolvedValue(null);

    await expect(service.updateTransaction("id", {
      title: "A",
      amount: 10,
      type: "entrada",
      category: "Teste",
      date: "2024-01-01"
    })).rejects.toThrow("Título inválido");
  });
});
