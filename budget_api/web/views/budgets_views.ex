defmodule BudgetApi.BudgetsView do
  use BudgetApi.Web, :view

  def render("index.json", %{budgets: budgets}) do
    %{
      budgets: Enum.map(budgets, &budgets_json/1)
    }
  end  

  def budgets_json(budget) do
    %{
      budgetName: budget.budgetName,
      budgetTotal: budget.budgetTotal,
      description: budget.description
    }
  end

  def render("show.json", %{budget: budget}) do
    %{
      budget: budgets_json(budget)
    }
  end
end