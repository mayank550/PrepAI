import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "../container";
import { LogoContainer } from "../logo-container";
import { NavigationRoutes } from "../navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "../profile-container";
import { ToggleContainer } from "../toggle-container";
const Header = () => {
  const { userId } = useAuth();

  return (
    <header
      className={cn("w-full border-b duration-150 transition-all ease-in-out")}
    >
      <Container>
        <div
          className={cn(
            "w-full flex items-center justify-between py-2 duration-150 transition-all ease-in-out"
          )}
        >
          {/*logo section*/}
          <LogoContainer />

          {/*navigation section*/}
          <nav className="hidden md:flex items-center gap-3 ml-4">
            <NavigationRoutes />

            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600 ",
                    isActive && "text-neutral-900 font-semibold"
                  )
                }
              >
                Take An Interview
              </NavLink>
            )}
          </nav>

          <div className="ml-auto flex items-centre gap-6">
            {/*profile section*/}
            <ProfileContainer />
            {/* mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
