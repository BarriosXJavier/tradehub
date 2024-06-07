import Users from "./users/page";
import Products from "./products/page";
import Transactions from "./transactions/page";
import Chart from "@/ui/dashboard/chart";
import Revenue from "./revenue/page";
import Reports from "./reports/page";
import Help from "./help/page";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Users searchParams={{
        q: undefined,
        page: undefined
      }} />
      <Products />
      <Transactions />
      <Chart />
      <Revenue />
      <Reports />
      <Help />
    </div>
  );
};

export default LandingPage;