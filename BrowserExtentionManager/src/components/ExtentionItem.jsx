import React from 'react'
import styled from 'styled-components'
import ECBSwtch from './ExtentionListComponents/ECBSwtch'

const ExtentionCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 380px;
    height: 200px;
    background-color: ${props => props.theme === true ? 'hsl(226, 25%, 17%)' : 'hsl(0,0%,93%)'};
    color: ${props => props.theme === true ? 'hsl(0,0%,93%)' : 'hsl(200,15%,8%)'};
    border: 0.5px solid hsl(226, 11%, 37%);
    border-radius: 20px;
    padding: 20px;
    transition: all 0.2s ease-in-out;

        &:hover{
        transform: scale(1.01);
        box-shadow: 0px 0px 10px hsl(3, 71%, 56%);
    }


`
const ExtentionCardTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: auto;
    gap: 18px;
`

const ExtentionCardBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
`

const ECBBtn = styled.button`
    background-color: ${props => props.theme === true ? 'hsl(225,23%,24%)' : 'hsl(0,0%,93%)'};
    color: ${props => props.theme === true ? 'hsl(0,0%,93%)' : 'hsl(200,15%,8%)'};
    font-size: 16px;
    border-radius: 30px;
    border: 0.5px solid hsl(0, 0%, 78%);
    padding: 10px 15px;
    cursor: pointer;
    outline: none;
    font-weight: 500;
    transition: all 0.2s ease-in-out;


    &:hover {
        background-color: ${props => props.theme === true ? `hsl(3, 71%, 56%)` : `hsl(3.47,77.58%,43.73%)`};
        color: ${props => props.theme === true ? 'hsl(225,23%,24%)' : 'hsl(0,0%,93%)'};
        border: 0.5px solid ${props => props.theme};
        font-weight: 700;
        transition: all 0.1s ease-in-out;
    }
`
const ECBSmall = styled.small`
    color:${props => props.theme === true ? 'hsl(0,0%,78%)' : 'hsl(226, 11%, 37%)'};
    font-weight:400;
    margin-top: 5px;
`



export default function ExtentionItem({ darkMode, img, title, description, isActive, data, setData }) {

    function removeCard(e) {
        const card = e.target.parentElement.parentElement
        const cardName = card.getElementsByTagName('h4')[0].innerText
        const dataCopy = [...data]
        for (let i = 0; i < dataCopy.length; i++) {
            if (dataCopy[i].name === cardName) {
                dataCopy.splice(i, 1)
            }
        }
        setData(dataCopy)
    }
    React.useEffect(() => {

    }, [data])

    return (
        <ExtentionCard
            theme={darkMode}
        >
            <ExtentionCardTop>
                <img src={img} alt={img}></img>
                <div>
                    <h4>{title}</h4>
                    <ECBSmall theme={darkMode}>{description}</ECBSmall>
                </div>
            </ExtentionCardTop>
            <ExtentionCardBottom
            >
                <ECBBtn
                    theme={darkMode}
                    onClick={(e) => removeCard(e)}
                >
                    Remove
                </ECBBtn>
                <ECBSwtch
                    darkMode={darkMode}
                    isActive={isActive}
                />

            </ExtentionCardBottom>

        </ExtentionCard>
    )
}