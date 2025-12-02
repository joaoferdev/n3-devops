import * as service from "./transaction.service.js";

export default {
  async create(req, res, next) {
    try {
      const result = await service.createTransaction(req.body);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },

  async list(req, res, next) {
    try {
      const result = await service.listTransactions(req.query);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  async get(req, res, next) {
    try {
      const result = await service.getTransaction(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const result = await service.updateTransaction(req.params.id, req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  async delete(req, res, next) {
    try {
      await service.deleteTransaction(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
