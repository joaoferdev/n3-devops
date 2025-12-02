import Transaction from "./transaction.model.js";

export default {
  async create(data) {
    return await Transaction.create(data);
  },

  async find(filters) {
    return await Transaction.find(filters).sort({ date: -1 });
  },

  async findById(id) {
    return await Transaction.findById(id);
  },

  async update(id, data) {
    return await Transaction.findByIdAndUpdate(id, data, { new: true });
  },

  async delete(id) {
    return await Transaction.findByIdAndDelete(id);
  }
};
