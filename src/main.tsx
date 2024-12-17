// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {store} from './store.ts'
import {Provider} from 'react-redux'

// const queryClient = new QueryClient();

// createRoot(document.getElementById("root")!).render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>
// );



createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);