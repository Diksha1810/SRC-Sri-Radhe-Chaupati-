import React, { useState } from 'react'
import './App.css';
import { BsSearch } from 'react-icons/bs';

function SearchFilter() {
	const productList = ["blue pant"
		, "black pant"
		, "blue shirt"
		, "black shoes"
		, "brown shoes"
		, "white pant"
		, "white shoes"
		, "red shirt"
		, "gray pant"
		, "white shirt"
		, "golden shoes"
		, "dark pant"
		, "pink shirt"
		, "yellow pant"];
	const [products, setProducts] = useState(productList);
	const [searchVal, setSearchVal] = useState("");
	function handleSearchClick() {
		if (searchVal === "") { setProducts(productList); return; }
		const filterBySearch = productList.filter((item) => {
			if (item.toLowerCase()
				.includes(searchVal.toLowerCase())) { return item; }
		})
		setProducts(filterBySearch);
	}
	// const mystyle = {
	// 	marginLeft: "600px",
	// 	marginTop: "20px",
	// 	fontWeight: "700"
	// };

	return (
		<div>
			<div>
				<input onChange={e => setSearchVal(e.target.value)}>
				</input>
				<BsSearch onClick={handleSearchClick} />
			</div>
			<div>

				{products.map((product) => {
					return (
						<div>{product}</div>
					)
				})
				}

			</div>
		</div>
	);
}

export default SearchFilter;
