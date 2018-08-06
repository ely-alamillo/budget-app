# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :budget_api,
  ecto_repos: [BudgetApi.Repo]

# Configures the endpoint
config :budget_api, BudgetApi.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "zgj8/eeKny+3vA+5mOUD4Wt9kqJNnqGwK3WwLR7qYrDP6moBNLuUhMAt0DWo401d",
  render_errors: [view: BudgetApi.ErrorView, accepts: ~w(html json)],
  pubsub: [name: BudgetApi.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
