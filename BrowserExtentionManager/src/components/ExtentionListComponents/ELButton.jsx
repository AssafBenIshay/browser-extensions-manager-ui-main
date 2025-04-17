import React from 'react'
import styled from 'styled-components'

const ELBtn = styled.button`
    width: auto;
    height: auto;
    font-size: 20px;
    font-weight: 500;
    font-family: 'noto sans', sans-serif;
    border-radius: 50px;
    padding:9px 20px;
    background-color: ${props => props.theme === true ? 'hsl(225, 23%, 24%)' : 'hsl(0,0%,93%)'};
    color: ${props => props.theme === true ? 'hsl(0, 0%, 93%)' : 'hsl(200, 15%, 8%)'};
    border: 0.5px solid hsl(226, 11%, 37%);
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:focus {
        background-color:${props => props.theme === true ? 'hsl(3, 86%, 64%)' : 'hsl(3, 77%, 44%)'};
        color:${props => props.theme === true ? 'hsl(225, 23%, 24%)' : 'hsl(0, 0%, 93%)'};
    }
    &:hover {
        filter: brightness(1.2);
    }
`

export default function ELButton({ text, darkMode, setStatus, status }) {
    const [firstRender, setFirstRender] = React.useState(true)
    const frBtn = React.useRef(false)
    React.useEffect(() => {
        if (status && firstRender) {
            setFirstRender(false)
            frBtn.current.focus()
        }
    }, [status, firstRender])

    return (
        <ELBtn
            theme={darkMode}
            onClick={() => setStatus(text.toLowerCase())}
            ref={frBtn}
        >
            {text}

        </ELBtn>
    )
}