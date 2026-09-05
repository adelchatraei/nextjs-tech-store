import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    const role = session.user.role;

    switch (role) {
        case "user":
            redirect("/dashboard/user");

        case "admin":
            redirect("/dashboard/admin");

        case "super-admin":
            redirect("/dashboard/super-admin");

        default:
            redirect("/");
    }
};

export default DashboardPage;
