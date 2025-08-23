import { useQuery } from '@tanstack/react-query'
import ErrorMessage from './ErrorMessage';
import PostCard from './PostCard';

export const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, error, isLoading, refetch, isFetching } =  useQuery({
    queryKey: ['post'],
    queryFn: fetchData
  });


    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (error) return <div>Error loading data</div>;

    return (
          <main>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => refetch()}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-50"
          disabled={isFetching}
        >
        {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
      </div>

      {error && <ErrorMessage message={error.message} />}
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </main>
    )
}

export default PostsComponent;