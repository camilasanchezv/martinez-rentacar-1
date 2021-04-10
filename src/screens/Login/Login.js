import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.jpg'
import { UserLogin } from '../../components';
import './styles.scss';


export default function Login() {
    const [background, setBackground] = useState("pep")
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
		tag: "car",
		type: "random",
		rating: "pg-13"
	};

	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);


    console.log(background)
    const getGif = async () => {
        const response = await fetch(giphyURL)
        const data = await response.json()
        setBackground(data.data.image_original_url)
    }
    useEffect(() => {
        getGif()
    }, [])
	


    return (
        <div className="login-screen" style={{ "background-image": `url(${background})`}}>
            <div className="login-container">
                <div className="brand">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <UserLogin />
            </div>
        </div>
    )
}