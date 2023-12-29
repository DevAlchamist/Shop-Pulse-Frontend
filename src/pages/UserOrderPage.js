import Navbar from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/userOrders";
function UserOrderPage() {
  return (
    <>
      <Navbar>
        <UserOrders></UserOrders>
      </Navbar>
    </>
  );
}

export default UserOrderPage;
