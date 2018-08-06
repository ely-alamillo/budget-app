defmodule BudgetApi.BudgetsController do
  use BudgetApi.Web, :controller
  alias BudgetApi.Budgets

  def index(conn, _params) do
    budgets = Repo.all(Budgets)
    render conn, "index.json", budgets: budgets
  end

  def create(conn, budget_params) do
    changeset = Budgets.changeset(%Budgets{}, budget_params)

    case Repo.insert(changeset) do
    {:ok, _budgets} ->
      budgets = Repo.all(Budgets)
      render conn, "index.json", budgets: budgets
    {:error, changeset} ->
      render conn, "error.json", error: "erro in budget create"
    end
  end

  def show(conn, %{"id" => id}) do
    budget = Repo.get(Budgets, id)
    render conn, "show.json", budget: budget
  end
end