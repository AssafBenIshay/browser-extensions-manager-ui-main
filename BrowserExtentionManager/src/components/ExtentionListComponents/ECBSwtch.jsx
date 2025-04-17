import React from 'react'
import styled from 'styled-components'

const SwtchContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 35px;
    height: 20px;
    border-radius: 20px;
    border: 0.5px solid hsl(226, 25%, 17%);
    background-color: ${props => props.theme === true ? 'hsl(3,86%,64%)' : 'hsl(3, 71%, 56%)'};

    padding: 2px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`
const SwtchCircle = styled.div`
    background-color: hsl(0, 0%, 100%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
`

export default function ECBSwtch({ darkMode, isActive }) {
    const [active, setActive] = React.useState(isActive)

    return (
        <SwtchContainer
            style={
                active ? {
                    justifyContent: 'flex-end',
                    filter: 'saturate(100%)',
                } : {
                    justifyContent: 'flex-start',
                    filter: 'saturate(0%)',
                }}

            theme={darkMode}
            onClick={() => setActive(last => !last)}
        // actn={active.toString()}
        >
            <SwtchCircle>

            </SwtchCircle>
        </SwtchContainer>
    )
}