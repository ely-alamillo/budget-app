defmodule BudgetApi.ExpensesController do
  use BudgetApi.Web, :controller
  alias BudgetApi.Expenses # now we can use Expenses

  def index(conn, _params) do
    expenses = Repo.all(Expenses)
    render conn, "index.json", expenses: expenses
  end

  def create(conn, expenses_params) do
    changeset = Expenses.changeset(%Expenses{}, expenses_params)

    case Repo.insert(changeset) do
      {:ok, _expenses} ->
        expenses = Repo.all(Expenses)
        render conn, "index.json", expenses: expenses
      {:error, changeset} ->
        # handle error here
        render conn, "error.json", error: "error in create"
    end
  end

  def show(conn, %{"id" => id}) do
    expense = Repo.get(Expenses, id)
    render conn, "show.json", expense: expense
  end
end