import styled from 'styled-components'
import SunIcon from '../assets/images/icon-sun.svg'
import MoonIcon from '../assets/images/icon-moon.svg'
import Logo from '../assets/images/logo.svg'
import React from 'react'

const SearchBarInput = styled.input`
    width:1170px;
    height:75px;
    border-radius: 20px;
    border: none;
    margin-top:40px;
    background-color: ${props => props.theme === true ? 'hsl(226, 25%, 17%)' : 'hsl(200, 60%, 99%)'};
    color: ${props => props.theme === true ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
    position: relative;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    font-weight: 500;
    text-indent: 240px;
    outline: none;

@media (max-width: 1200px) {
    width:790px;

  }

    @media (max-width: 800px) {
    width:375px;
    margin-top:20px;
  }


`
const SearchBarButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:50px;
    height:50px;
    position: absolute;
    right:20px;
    top: 46%;
    border-radius: 10px;
    background-color: ${props => props.theme === true ? 'hsl(225, 23%, 24%)' : 'hsl(0, 0%, 93%)'};
    border: none;
    cursor: pointer;
    outline: none;
    &:hover {
        filter: brightness(0.8);
    }
    &:active {
        filter: brightness(0.6);
    }

    @media (max-width: 800px) {
        top:35%
  }

`
const SearchBarIcon = styled.img`
    position: absolute;
    left:20px;
    top: 50%;
    filter: ${props => props.theme === true ? 'hue-rotate(180deg) invert(1) saturate(350%)' : ''};
        @media (max-width: 800px) {
        top:39%
  }


`

export default function SearchBar({ darkMode, setDarkMode, setSearchPhrase }) {



    return (
        <div style={{ position: 'relative' }}>
            <SearchBarInput
                type="text"
                className="search-input"
                theme={darkMode}
                onChange={(e) => setSearchPhrase(e.target.value)}
            />
            <SearchBarIcon src={Logo} theme={darkMode} />
            <SearchBarButton
                onClick={() => setDarkMode(last => !last)}

                theme={darkMode }><img src={darkMode ? SunIcon : MoonIcon} ></img></SearchBarButton>
        </div>
    )
}