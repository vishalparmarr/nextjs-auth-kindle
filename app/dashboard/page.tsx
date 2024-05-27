import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

<LogoutLink>Log out</LogoutLink>;

const Dashboard = () => {
  return (
    <div className="bg-green-500 flex justify-center items-center w-full h-screen">
      <h1 className="text-xl">
        Welcome to Dashboard
        <div>
          <LogoutLink className="text-base flex justify-center bg-black rounded-md p-2 m-3">Log out</LogoutLink>
        </div>
      </h1>
    </div>
  );
};

export default Dashboard;
