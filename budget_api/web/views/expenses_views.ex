defmodule BudgetApi.ExpensesView do
  use BudgetApi.Web, :view

  def render("index.json", %{expenses: expenses}) do
    %{
      expenses: Enum.map(expenses, &expenses_json/1)
    }
  end

  def expenses_json(expense) do
    %{
      category: expense.category,
      description: expense.description,
      expenseName: expense.expenseName,
      expenseTotal: expense.expenseTotal
    }
  end

  # show single expense
  def render("show.json", %{expense: expense}) do
    %{
      expense: expenses_json(expense)
    }
  end
end