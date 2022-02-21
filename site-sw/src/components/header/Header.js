import { Logo } from "./styled"
import logo from '../../assets/logo.png'

export const Header = () => {

    return (
        <Logo>
            <img src={logo} alt="star wars" />
        </Logo>
    )
}

export default Header