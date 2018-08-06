defmodule BudgetApi.Expenses do
  use BudgetApi.Web, :model

  schema "expenses" do
    field :category, :string
    field :description, :string
    field :expenseName, :string
    field :expenseTotal, :string

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:category, :description, :expenseName, :expenseTotal])
  end
end
