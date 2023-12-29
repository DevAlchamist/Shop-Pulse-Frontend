import AdminOrders from "../features/admin/components/AdminOrder";
import Navbar from "../features/navbar/Navbar";

function AdminOrdersPage() {
  return (
    <>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
    </>
  );
}

export default AdminOrdersPage;
