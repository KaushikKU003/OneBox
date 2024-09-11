import email from "../Images/email.svg";

function Dashboard() {
	return (
		<div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen flex-col">
			<div>
				<img src={email} alt="Illustration" />
			</div>
			<div className="text-2xl my-8">
				It’s the beginning of a legendary sales pipeline
			</div>
			<div className="dark:text-[#9E9E9E] text-[#5B5F66]">
				When you have inbound E-mails you'll see them here
			</div>
		</div>
	);
}

export default Dashboard;
