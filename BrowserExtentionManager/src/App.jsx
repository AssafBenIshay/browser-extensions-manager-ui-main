import './App.css'
import styled from 'styled-components'
import SearchBar from './components/SearchBar'
import { useState,useEffect } from 'react'
import ExtentionsList from './components/ExtentionsList'
import ELDB from './assets/data.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width:1440px;
  background-image: ${props => props.theme === true ? 'linear-gradient(180deg, #040918 0%, #091540 100%)' : 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)'};
  
  @media (max-width: 1200px) {
    width:810px;
  }

      @media (max-width: 800px) {
    width:400px;
  }

  `



function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [data, setData] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')

  useEffect(() => {
    setData(ELDB)
  },[])

  return (
    <Container
      theme={darkMode }
    >
      <div>
        <SearchBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          data={data}
          setSearchPhrase={setSearchPhrase} />
      </div>
      <ExtentionsList
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        data={data}
        setData={setData}
        searchPhrase={searchPhrase}

      />
    </Container>
  )
}

export default App
