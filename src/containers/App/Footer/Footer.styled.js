import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    text-align: center;
    p { 
        color: 8E8E93;
        text-align: center;
        font-weight: 200;
    }
    h1 {
        margin-top: 10px;
    }
    span { 
        margin: 0 10px;
    }
`;

export const IconsWrapper = styled.div`
    margin: 10px 0;
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({color}) => color};
`;

export const VerticalLine = styled.hr`
    width: 80%;
    border-bottom: none;
    border-top: 1px solid #EFEFF4;
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledText = styled.p`
    margin-top: 15px;
`

