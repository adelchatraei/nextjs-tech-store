import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const userPage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    if (session.user.role !== "user") {
        redirect("/dashboard");
    }

    return (
        <main>
            <h1>User Dashboard</h1>
        </main>
    );
};

export default userPage;
