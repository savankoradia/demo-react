import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,//1*(60*1000), // 10 mins
        cacheTime: 200 //1*(60*1000), // 15 mins
      },
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
