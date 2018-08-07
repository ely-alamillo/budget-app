defmodule BudgetApi.Router do
  use BudgetApi.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", BudgetApi do
    pipe_through :browser # Use the default browser stack

    # these are the api endpoints created
    # get "/", PageController, :index
    # get "/expenses", ExpensesController, :index # show all expenses
    # post "/expenses", ExpensesController, :create # create expense
    # get "/expenses/:id", ExpensesController, :show # get a single expense
    
  end

  # Other scopes may use custom stacks.
  scope "/api", BudgetApi do
    pipe_through :api

    get "/", PageController, :index

    # expenses endpoints
    get "/expenses", ExpensesController, :index # show all expenses
    get "/expenses/:id", ExpensesController, :show # get a single expense
    post "/expenses", ExpensesController, :create # create expense

    # budget endpoints
    get "/budgets", BudgetsController, :index # show all budgets
    get "/budgets/:name", BudgetsController, :show # get a single budget
    # get "/budgetsDelete", BudgetsController, :delete_all # delete all budgets
    post "/budget", BudgetsController, :create # create budget
    
  end
end
