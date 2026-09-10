export class Expense {
  constructor({ id, title, amount, category, date }) {
    if (!title || amount <= 0) {
      throw new Error("Invalid expense");
    }

    this.id = id;
    this.title = title;
    this.amount = Number(amount);
    this.category = category;
    this.date = date;
  }
}
