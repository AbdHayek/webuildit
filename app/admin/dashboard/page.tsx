import BlogTable from "@/app/components/admin/BlogTable";
import Navbar from "@/app/components/admin/Navbar"

export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <Navbar />
      <div>
        <BlogTable />
      </div>
    </div>
  );
}
