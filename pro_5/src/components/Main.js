import React from 'react'

function Main(props) {







	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaL8ADYeMTI_d05vO12jbizVKahEtBc_nmQ&usqp=CAU"
	})


	const [allMemes, setAllMemes] = React.useState([])

	React.useEffect(async()=>{
		 fetch ("https://api.imgflip.com/get_memes")
		.then(res => res.json())
		.then(data => setAllMemes(data.data.memes))
	},[])


	function getMemeImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length)
		const url = allMemes[randomNumber].url
		setMeme(prevMeme => ({
			...prevMeme,
			randomImg: url
		}))

	}

	function handleChange(event) {
		const {name,value} = event.target
		setMeme(prevMeme => ({
			...prevMeme,
			[name] : value
		}))
	}

	return (
		<main>
			<div className='form'>
				<input
					type="text"
					placeholder='Top-text'
					className='form-input'
					name="topText"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					placeholder='Bottom-text'
					className='form-input'
					name="bottomText"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button
					className='form-btn'
					onClick={getMemeImage}
				>
					Get a new meme image 🖼️

				</button>

			</div>

			<div className='image-con'>
				<img src={meme.randomImg} alt="meme" className='meme-img' />
				<h2 className='meme-text-top'>{meme.topText}</h2>
				<h2 className='meme-text-bottom'>{meme.bottomText}</h2>

			</div>



		</main>
	)
}

export default Main;
