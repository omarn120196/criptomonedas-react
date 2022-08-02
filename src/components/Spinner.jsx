import '../styles/Spinner.css';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    margin-top: 30px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Spinner = () => {
    return (
        <Contenedor>
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </Contenedor>
    )
}

export default Spinner