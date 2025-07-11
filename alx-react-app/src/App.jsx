import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
 return (
  <>
   <div className="App">
    {/* The message components is rendered here*/}
    <WelcomeMessage />
  </div>

  <div className="App">
    <Header />
  </div>

  <div className="App">
    <MainContent />
  </div>

  <div className="App">
    <Footer />
  </div>

  <div className="App">
    <UserProfile
    name="Alice"
    age="26"
    bio="Loves hiking and photography" />
  </div>
  </>
 );

} 

export default App;
