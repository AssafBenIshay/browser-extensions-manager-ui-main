import React from 'react'
import styled from 'styled-components'
import ELButton from './ExtentionListComponents/ELButton'
import ExtentionItem from './ExtentionItem'


const ExtentionsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1170px;
    height: 100%;
    background-color:transparent;

    @media (max-width: 1200px) {
    width:790px;
  }

`
const ExtentionsListTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 60px;

    @media (max-width: 1200px) {
    width:790px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

  }

    @media (max-width: 800px) {
    width:375px;
    flex-direction: column;
  }


`
const ExtentionsListBottom = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:14px;
    width: 100%;
    height: auto;
    background-color:transparent;
    margin-top: 40px;
    margin-bottom: 40px;

    @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    width:790px;
  }

  @media (max-width: 800px) {
    width:375px;
    grid-template-columns: repeat(1, 1fr);
  }


`

const ELH1 = styled.h1`
    font-size: 34px;
    font-weight: 700;
    color: ${props => props.theme === true ? "hsl(200,60%,99%)" : "hsl(227,75%,14%)"};
    margin: 0;
    padding: 0;

    @media (max-width: 800px) {
    margin-bottom: 20px;
  }

`
const ELButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    gap:12px;
`


export default function ExtentionsList({ darkMode, data,setData, searchPhrase }) {
    const [status, setStatus] = React.useState('all')


    return (
        <ExtentionsListContainer>
            <ExtentionsListTop>
                <ELH1 theme={darkMode}>Extentions List</ELH1>
                <ELButtons>
                    <ELButton
                        darkMode={darkMode}
                        text={'All'}
                        setStatus={setStatus}
                        status={status}
                    ></ELButton>
                    <ELButton
                        darkMode={darkMode}
                        text={'Active'}
                        setStatus={setStatus}
                    ></ELButton>
                    <ELButton
                        darkMode={darkMode}
                        text={'Inactive'}
                        setStatus={setStatus}
                    ></ELButton>
                </ELButtons>
            </ExtentionsListTop>
            <ExtentionsListBottom>
                {searchPhrase.length === 0 && status === "all" && data.map(item => (
                    <ExtentionItem
                        data={data}
                        setData={setData}

                        darkMode={darkMode}
                        title={item.name}
                        description={item.description}
                        img={item.logo}
                        isActive={item.isActive}
                        key={crypto.randomUUID()}

                    ></ExtentionItem>
                ))}
                {searchPhrase.length === 0 && status === "active" && data.filter(item => item.isActive).map(item => (
                    <ExtentionItem
                        data={data}
                        setData={setData}

                        darkMode={darkMode}
                        title={item.name}
                        description={item.description}
                        img={item.logo}
                        isActive={item.isActive}
                        key={crypto.randomUUID()}

                    ></ExtentionItem>
                ))}
                {searchPhrase.length === 0 && status === "inactive" && data.filter(item => !item.isActive).map(item => (
                    <ExtentionItem
                        data={data}
                        setData={setData}

                        darkMode={darkMode}
                        title={item.name}
                        description={item.description}
                        img={item.logo}
                        isActive={item.isActive}
                        key={crypto.randomUUID()}

                    ></ExtentionItem>
                ))}
                {searchPhrase.length > 0 &&
                    data.filter(item => item.name.toLowerCase().includes(searchPhrase.toLowerCase())).map(item => (
                        <ExtentionItem
                            data={data}
                            setData={setData}

                            darkMode={darkMode}
                            title={item.name}
                            description={item.description}
                            img={item.logo}
                            isActive={item.isActive}
                            key={crypto.randomUUID()}

                        ></ExtentionItem>
                    ))}
            </ExtentionsListBottom>
        </ExtentionsListContainer>
    )
}