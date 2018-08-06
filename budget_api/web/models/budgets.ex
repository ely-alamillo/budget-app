defmodule BudgetApi.Budgets do
  use BudgetApi.Web, :model

  schema "budgets" do
    field :budgetName, :string
    field :budgetTotal, :string
    field :description, :string

    timestamps()
  end

  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:budgetName, :budgetTotal, :description])
  end
end