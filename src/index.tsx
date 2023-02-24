import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from "./Router";
import { QueryClient, QueryClientProvider } from 'react-query'
import axios from "axios/index";

const queryClient = new QueryClient()

axios.defaults.baseURL = 'http://localhost:3030';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
