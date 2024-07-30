import { NavBar } from "../../shared/components/NavBar";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
