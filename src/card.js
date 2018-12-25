import React from 'react';

const Card = (props) => {
	return(
		<div style={{margin: '1em'}}>
			<img width="100" src={props.avatar_url} alt="" />
			<div style={{display: 'inline-block', marginRight: 600}}>
				<div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
				  {props.name}
				</div>
				<div>{props.company}</div>
			</div>
		</div>
		);
};

let data = [
	{ name: "aka",
	  avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
	  company: "Facebook" },
	{ name: "vka",
	  avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
	  company: "Facebook" },
	  { name: "test",
	  avatar_url: "	  https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?cs=srgb&dl=beach-exotic-holiday-248797.jpg&fm=jpg",
	  company: "image" },
];

const CardList = (props) => {
	return(
		<div>
			{data.map(card => <Card {...card} />)}
		</div>
		);
};

export default CardList



