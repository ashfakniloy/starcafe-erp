import React from "react";
import Cards from "../../components/Dashboard/Cards";
import Layout from "../../components/Layout";

function AdminDashboardPage() {
  return (
    <Layout>
      <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        <Cards />
      </div>
    </Layout>
  );
}

export default AdminDashboardPage;
