import React from "react";
import Card from "../Card/Card";

function CardList({ list }) {
	return (
		<div className="row my-5">
			{list.map((post) => (
				<div key={post.id} className="col-3">
					<Card image={post.image} text={post.text} />
				</div>
			))}
		</div>
	);
}

export default CardList;
