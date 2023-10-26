import './App.css'
import useInternetSpeed from './components/useInternetSpeed'

function App() {
  const { speed, intervalHandler } = useInternetSpeed()
  return (
    <>
      <button onClick={() => intervalHandler()}>
        speed is <strong>{speed}</strong> Mbps
      </button>
    </>
  )
}

export default App
