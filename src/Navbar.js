const Navbar = () => {
	return (
		<div className="Navbar flex my-4 justify-between max-w-3xl mx-auto items-center">
			<h1 className="text-3xl">ANIME ZONE</h1>
			<ul className="flex text-xl">
				<li><a href="/">Home</a></li>
				<li><a className="ml-4" href="#">About</a></li>
			</ul>
		</div>
	);
}

export default Navbar;