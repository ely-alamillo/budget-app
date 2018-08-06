defmodule BudgetApi.Repo.Migrations.Expenses do
  use Ecto.Migration

  def change do

    create table(:expenses) do
      add :category, :string
      add :description, :string
      add :expenseName, :string
      add :expenseTotal, :string
    timestamps()
    end

    create table(:budgets) do
      add :description, :string
      add :budgetName, :string
      add :budgetTotal, :string
    timestamps()
    end

  end

end
