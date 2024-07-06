import React from "react"
import { CChart } from "@coreui/react-chartjs"

import UpTrend from "/src/assets/uptrend.png"
import DownTrend from "/src/assets/downtrend.png"

import "./Dashboard.scss"
import DashboardSummaryPanel from "./DashboardSummaryPanel"

const Dashboard = () => {
	return (
		<div id='dashboard'>
			<div>
				<h3>Welcome investor,</h3>
				<p className='text-gray'>Dashboard</p>
				<div className='h-[1px] bg-[#bec6c9] w-[98%] mx-auto my-4'>&nbsp;</div>
			</div>

			<ul className='mt-8 grid grid-cols-4 gap-4'>
				<DashboardSummaryPanel
					heading={"Views"}
					number={"7,265"}
					fluctuation={"+11,02%"}
					color={"blue"}
					icon={UpTrend}
				/>
				<DashboardSummaryPanel
					heading={"Customers buy"}
					number={"3,671"}
					fluctuation={"-0,03%"}
					color={"purple"}
					icon={DownTrend}
				/>
				<DashboardSummaryPanel
					heading={"New Customer"}
					number={"156"}
					fluctuation={"+15,03%"}
					color={"blue"}
					icon={UpTrend}
				/>
				<DashboardSummaryPanel
					heading={"New staff"}
					number={"7,265"}
					fluctuation={"+11,02%"}
					color={"purple"}
					icon={DownTrend}
				/>
			</ul>

			<div className='mt-8 bg-[#f7f9fb] rounded-3xl p-4 pt-8'>
				<h3>Total Amount</h3>
				<CChart
					height={100}
					type='line'
					data={{
						labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
						datasets: [
							{
								label: "Last year",
								backgroundColor: "#4e8a8c",
								pointBackgroundColor: "#4e8a8c",
								pointHoverBackgroundColor: "#78d5d8",
								fill: false,
								borderColor: "rgba(75,192,192,1)",
								borderDash: [5, 5], // Dashed line configuration [dash length, gap length]
								borderWidth: 2,
								tension: 0.4, // Optional: for a smoother line
								data: [65, 59, 90, 81, 56, 55, 40],
							},
							{
								label: "This year",
								backgroundColor: "#2b2c2c",
								pointBackgroundColor: "#2b2c2c",
								pointBorderColor: "#fff",
								borderColor: "#1c1c1c",
								pointHoverBackgroundColor: "#fff",
								borderWidth: 1.4,
								pointHoverBorderColor: "#2b2c2c",
								data: [28, 48, 40, 19, 96, 27, 100],
							},
						],
					}}
					options={options}
				/>
			</div>

			<div className='mt-8 flex gap-2'>
				<div className='bg-[#f7f9fb] rounded-3xl p-4 flex-1'>
					<h3 className='mb-4'>Doanh số theo dự án</h3>
					<CChart
						type='bar'
						data={{
							barPercentage: 1,
							labels: ["TPHCM", "Hà Nội", "BRVT", "Cà Mau", "Đà Nẵng", "Long An"],
							datasets: [
								{
									label: "Doanh số",
									backgroundColor: ["#96a7f7", "#c5eac0", "#1c1c1c", "#bae2fd", "#adc4d8", "#afe0cc"],
									data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
									borderRadius: 10,
									minBarLength: 3,
									barThickness: 30,
								},
							],
						}}
						options={options}
					/>
				</div>

				<div className='bg-[#f7f9fb] rounded-3xl p-4'>
					<h3 className='mb-4'>Doanh số theo sản phẩm</h3>
					<CChart
						type='doughnut'
						data={{
							labels: ["TPHCM", "Hà Nội", "BRVT", "Cà Mau"],
							datasets: [
								{
									label: "Doanh số",
									backgroundColor: ["#96a7f7", "#c5eac0", "#1c1c1c", "#bae2fd", "#adc4d8", "#afe0cc"],
									data: [40, 20, 12, 39],
								},
							],
						}}
					/>
				</div>
			</div>
		</div>
	)
}

var options = {
	plugins: {
		legend: {
			labels: {
				color: "#111",
			},
		},
	},
	scales: {
		x: {
			grid: {
				color: "rgba(0,0,0,0)",
			},
			ticks: {
				color: "#111",
			},
		},
		y: {
			grid: {
				color: "rgba(0,0,0,0)",
			},
			ticks: {
				color: "#111",
			},
		},
	},
}

export default Dashboard
