import styled from 'styled-components';

export const LinkingWrapper = styled.div`
.selected {
    :after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 50%;
        height: 16px;
        border-left: 1px solid black;
    }
}
ul {
    list-style-type:none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
}


li {
    display: inline-block;
    padding: 5px 5px 10px 5px;
    position: relative;
    font-weight: bold;
    margin: 10px 30px;
    font-size: 24px;
    font-weight: 100;
    a {
        color: black;
    }
}

`