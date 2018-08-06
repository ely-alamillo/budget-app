defmodule BudgetApi.PageController do
  use BudgetApi.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
