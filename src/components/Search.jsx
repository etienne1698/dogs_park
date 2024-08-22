import Button from "../components/Button";

export default function Search() {
	return (
		<div className="flex items-center flex-col">
			<div className="bg-white p-8 rounded-lg border-black border-2 w-[93%]">
				<h3 className="font-poppins text-sm font-bold mb-5">
					Find a dog park nearby
				</h3>
				<form
					onSubmit={(e) => e.preventDefault()}
					className="flex flex-col items-center"
				>
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Enter an address, neighbourhood or city"
						className="border p-2 rounded w-full mb-4 bg-gray-200"
					/>
					<Button txt="Search" className="mb-4 w-[237px]" />
				</form>
				<p className="font-poppins font-medium text-gray-500 text-[10px] text-right">
					Advance Search
				</p>
			</div>
		</div>
	);
}
