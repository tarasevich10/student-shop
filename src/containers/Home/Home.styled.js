import styled from 'styled-components';
import { Button } from 'antd';

export const SectionWrapper = styled.div`
    display: flex;
    background-color: #bdaeac;
    height: 100%;
    width:100%;
    justify-content: space-between;
    padding: 0 200px;
`;

export const StyledText = styled.div`
    padding-top: 70px;
    color: white;
    font-size: 16px;
    h1 {
        font-size: 40px;
        color: white;
    }
`
export const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 20px;
    color: white;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`