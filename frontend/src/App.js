import react from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import HomeScreen from './screens/HomeScreen'
import {Container} from 'react-bootstrap'

function App() {
  return (
    <>
      
        <Header />
        <main>
          <Container>
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      
    </>
  );
}

export default App;
