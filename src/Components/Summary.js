import styled from "styled-components";

const Summary = () => {
    return (
        <DivContainer>
            <h3>Try to Guess the word by typing on the Keyboard and pressing enter</h3>
            <DivSubcontainer>
                <ColoredDiv color="gray"/>
                <h3>If the letter is highlited Gray the letter is not contained in the Word</h3>
            </DivSubcontainer>
            <DivSubcontainer>
                <ColoredDiv color="lightgreen"/>
                <h3>If the letter is highlited Green the letter is contained in the Word and has the exact position</h3>
            </DivSubcontainer>
            <DivSubcontainer>
                <ColoredDiv color="yellow"/>
                <h3>If the letter is highlited Yellow the letter is contained in the Word but not in the exact position</h3>
            </DivSubcontainer>
        </DivContainer>
    )
}

export default Summary;

const DivContainer = styled.div`
    width: 100%;
`
const DivSubcontainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 30px;
    align-items: center;
`

const ColoredDiv = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
`