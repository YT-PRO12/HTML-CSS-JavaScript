export class ExpenseService {
  #expenses = [];

  add(expense) {
    this.#expenses.push(expense);
  }

  remove(id) {
    this.#expenses = this.#expenses.filter(expense => expense.id !== id);
  }

  getAll() {
    return [...this.#expenses];
  }

  total() {
    return this.#expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  byCategory(category) {
    return this.#expenses.filter(expense => expense.category === category);
  }
}
