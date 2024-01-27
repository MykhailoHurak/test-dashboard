import { Outlet } from "react-router-dom";

import { Container, LeftMenu, Menu, Logo, Link, RightPart } from "../App.styled";

export const SharedLayout = () => {
    return (
        <Container>
            <LeftMenu>
                <Menu>
                    <Logo>
                        LOGO Dashboard
                    </Logo>
                    <nav>
                        <Link to="/" end>Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/customers">Customers</Link>
                        <Link to="/income">Income</Link>
                        <Link to="/promote">Promote</Link>
                        <Link to="/help">Help</Link>
                    </nav>
                </Menu>
            </LeftMenu>
            <RightPart>
                <Outlet />
            </RightPart>
        </Container>
        
    );
};