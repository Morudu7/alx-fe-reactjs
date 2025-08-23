import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import PostComponent from './components/PostComponent'
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Header />
        <PostComponent />
      </QueryClientProvider>
  )
}

export default App
