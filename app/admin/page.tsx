import AdminProductCard from "@/components/admin/admin-product-card/admin-product-card";
import StatsCard from "@/components/admin/stats-card/stats-card";
import EmptyState from "@/components/common/empty-state/empty-state";
import SectionHeader from "@/components/common/section-header/section-header";
import ProductsCard from "@/components/products/Products-card/Products-card";
import { getAllApprovedProducts, getAllProducts } from "@/lib/products/product-select";
import { auth, clerkClient } from "@clerk/nextjs/server"
import { InboxIcon, ShieldIcon } from "lucide-react";
import { redirect } from "next/navigation";


const AdminPage = async () => {

    const { userId } = await auth();
    if (!userId) {
        redirect('/sign-in');
    }


    const response = await clerkClient();
    const user = await response.users.getUser(userId!);
    const metaData = user.publicMetadata;
    const isAdmin = metaData?.isAdmin ?? false;

    if (!isAdmin) {
        redirect('/');
    }

    const allProducts = await getAllProducts();
    const approvedProducts = allProducts.filter((product) => product.status == "approved");
    const pendingProducts = allProducts.filter((product) => product.status == "pending");
    const rejectedProducts = allProducts.filter((product) => product.status == "rejected");

    return (
        <div className="py-20">
            <div className="wrapper">
                <div className="mb-12">
                    <SectionHeader
                        title="Product Admin"
                        icon={ShieldIcon}
                        description="Review and manage all products in the system."
                    />
                </div>

                <StatsCard
                    approvedProducts={approvedProducts.length}
                    pendingProducts={pendingProducts.length}
                    rejectedProducts={rejectedProducts.length}
                    allProducts={allProducts.length}

                />

                <section className="my-12">
                    <div className="section-header-with-count">
                        <h2 className="text-2xl font-bold">Pending Products {pendingProducts.length}</h2>
                    </div>

                    <div className="space-y-4 mt-6">
                        {pendingProducts.length === 0 ? (
                            <EmptyState icon={InboxIcon} message="No pending products" />
                        ) : (
                            pendingProducts.map((product) => (
                                <AdminProductCard key={product.id} product={product} />
                            ))
                        )}
                    </div>
                </section>

                <section className="my-12">
                    <div className="section-header-with-count">
                        <h2 className="text-2xl font-bold">All Products {allProducts.length}</h2>
                    </div>

                    <div className="space-y-4 mt-6">
                        {allProducts.map((product) => (
                            <AdminProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>


            </div>
        </div>
    )
}

export default AdminPage
