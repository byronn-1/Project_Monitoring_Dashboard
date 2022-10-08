import React from "react";
import { Provider } from "react-redux";

import { createMemoryHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import type { RootState } from "./app/store";
import projectReducer from './app/projectsSlice';


interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<Partial<RootState>>;
  initialRoutes?: string[];
}

// render with redux store and react router history
export function renderWithProvider(

  component: React.ReactElement,

  {
    preloadedState = undefined,
    initialRoutes = ["/"],
    ...renderOptions
  }: ExtendedRenderOptions = {}
)

{
  const store = configureStore({
    reducer: {project : projectReducer,  },
    preloadedState: {
      ...preloadedState,
    },

  });

  const user = userEvent.setup();
  let history = createMemoryHistory({ initialEntries: initialRoutes });
  
  return {
    store,
    user,
    history,
    ...render(
      <Provider store={store}>
        <HistoryRouter history={history}>{component}</HistoryRouter>
      </Provider>,
      renderOptions
    ),
  };
}

