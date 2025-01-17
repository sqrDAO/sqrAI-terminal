import React from "react";

const positions = [
    {
        date: "09/08/2023",
        time: "21:11:10",
        order: "BTC-PERP",
        type: "LONG 10X",
        typeColor: "#a4fb0e",
        orderType: "Limit",
        price: "$30,000.00",
        amount: "0.100 BTC",
        amountValue: "$3,000.00",
        margin: "$300.00",
        filled: "0.100 BTC",
        filledPercentage: "50.00%",
    },
    {
        date: "09/08/2023",
        time: "21:11:10",
        order: "BTC-PERP",
        type: "SHORT 10X",
        typeColor: "#ff868a",
        orderType: "Limit",
        price: "$30,000.00",
        amount: "0.100 BTC",
        amountValue: "$3,000.00",
        margin: "$300.00",
        filled: "0.100 BTC",
        filledPercentage: "50.00%",
    },
    {
        date: "09/08/2023",
        time: "21:11:10",
        order: "BTC-PERP",
        type: "LONG 10X",
        typeColor: "#a4fb0e",
        orderType: "Limit",
        price: "$30,000.00",
        amount: "0.100 BTC",
        amountValue: "$3,000.00",
        margin: "$300.00",
        filled: "0.100 BTC",
        filledPercentage: "50.00%",
    },
];

const PositionsContent: React.FC = () => {
    return (
        <div className="w-full">
            <table className="w-full table">
                <thead>
                    <tr className="border-b border-[#333]">
                        <th className="px-5 py-2.5 text-left text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                            Time
                        </th>
                        <th className="px-5 py-2.5 text-left text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                            Order
                        </th>
                        <th className="px-5 py-2.5 text-left text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                            Type
                        </th>
                        <th className="px-5 py-2.5 text-left text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                            Price
                        </th>
                        <th className="px-5 py-2.5 text-left text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                            Amount
                        </th>
                        <th className="px-5 py-2.5 text-left text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                            Margin
                        </th>
                        <th className="px-5 py-2.5 text-left text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                            Filled
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map((position, index) => (
                        <tr key={index} className="border-b border-[#333]">
                            <td className="px-5 py-4">
                                <div className="text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                                    {position.date}
                                </div>
                                <div className="text-[#888888] text-xs font-medium font-['Bricolage Grotesque']">
                                    {position.time}
                                </div>
                            </td>
                            <td className="px-5 py-4">
                                <div className="text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                                    {position.order}
                                </div>
                                <div
                                    className={`px-2 py-[3px] bg-[#222222] text-center text-xs font-medium font-['Bricolage Grotesque']`}
                                    style={{ color: position.typeColor }}
                                >
                                    {position.type}
                                </div>
                            </td>
                            <td className="px-5 py-4 text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                                {position.orderType}
                            </td>
                            <td className="px-5 py-4 text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                                {position.price}
                            </td>
                            <td className="px-5 py-4">
                                <div className="text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                                    {position.amount}
                                </div>
                                <div className="text-[#888888] text-xs font-medium font-['Bricolage Grotesque']">
                                    {position.amountValue}
                                </div>
                            </td>
                            <td className="px-5 py-4 text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                                {position.margin}
                            </td>
                            <td className="px-5 py-4">
                                <div className="text-[#c1c1c1] text-sm font-semibold font-['Bricolage Grotesque']">
                                    {position.filled}
                                </div>
                                <div className="text-[#888888] text-xs font-medium font-['Bricolage Grotesque']">
                                    {position.filledPercentage}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PositionsContent;
