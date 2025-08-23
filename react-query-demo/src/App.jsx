import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import PostsComponent from './components/PostsComponent'
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Header />
        <PostsComponent />
      </QueryClientProvider>
  )
}

export default App
