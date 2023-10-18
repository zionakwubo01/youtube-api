import Header from "../Block/Header";
import { Outlet } from "react-router-dom"
import Sidebar from "../Pages/Sidebar";
import { styled } from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />
      <Holder>
        <Sidebar />
        <Hold>
          <File>
            <Outlet />
          </File>
        </Hold>
      </Holder>
    </div>
  );
};

export default Layout;

const File = styled.div`
  width: calc(100% - 70px);
  display: flex;
`;

const Hold = styled.div`
  width: calc(100%);
  display: flex;
  justify-content: flex-end;
`;

const Holder = styled.div`
  display: flex;
  width: 100%;
`;