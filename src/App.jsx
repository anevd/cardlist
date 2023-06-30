import { useState } from "react";
import CardList from "./components/CardList/CardList";
import Form from "./components/Form/Form";

function App() {
	const [list, setList] = useState([]);
	const [text, setText] = useState("укажите название картинки");
	const [image, setImage] = useState("вставьте ссылку на картинку");
	function handleSubmit(event) {
		event.preventDefault();
		const post = {
			image,
			text,
			id: Date.now(),
		};
		setList((prev) => [...prev, post]);
		setText("");
		setImage("");
	}
	return (
		<>
			<main className="container my-5">
				<Form text={text} image={image} setText={setText} setImage={setImage} handleSubmit={handleSubmit} />
				<CardList list={list} />
			</main>
		</>
	);
}

export default App;
