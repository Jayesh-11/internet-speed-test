import './App.css'
import useInternetSpeed from './components/useInternetSpeed'

function App() {
  const { speed, intervalSetter } = useInternetSpeed()
  return (
    <>
      <button onClick={() => intervalSetter()}>
        speed is {speed}
      </button>
    </>
  )
}

export default App
