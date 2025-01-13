import { NextResponse } from "next/server";
// import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function DELETE(request) {
    if (request.method !== "DELETE") {
        // Respond with a 405 status code for unsupported methods
        return NextResponse.json(
            { message: "Method not allowed" },
            { status: 405 }
        );
    }
    const url = request.url;
    const id = url.split("/").pop(); // Extract the dynamic `id`
    console.log("id", id);
    if (!id) {
        // Respond with a 400 status code for missing ID
        return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }
    try {
        const res = await fetch(
            `${process.env.API_URL}/${process.env.NEXT_PUBLIC_AGENTID}/knowledge?memoryId=${id}`,
            {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                cache: "no-cache",
            }
        );
        console.log(res);
        if (!res.status == 200) {
            throw new Error("Network response was not ok");
        }
        return NextResponse.json({ data: "ok" });
    } catch (error) {
        return NextResponse.error();
    }
}