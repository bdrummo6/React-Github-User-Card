import React from 'react';
import styled from "styled-components";

const Followers = (props) => {
	const Container = styled.div`
		width: 95%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 15px 2% 15px 2%;
   `

	const Followers = styled.div`
         width: 100%;
         display: flex;
         justify-content: space-evenly;
         align-items: center;
         margin: 10px;
   `;

	const Follower = styled.div`
         width: 40%;
         display: flex;
         align-items: center;
         margin: 5px 2% 5px 2%;
         background: cadetblue;
         color: white;
         border: 2px solid white;
         border-radius: 2%;
   `;

	const AvatarContainer = styled.div`
		  width: 40%;
		  display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;
   `;

	const Avatar = styled.img`
			width: 60%;
			height: 75%;
			margin: 5px;
   `;

	const Atts = styled.div`
		  width: 55%;	
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
   `;

	const Ul = styled.ul`
		  width: 95%;	
        list-style: none;
   `;

	const Item = styled.li`
        font-size: 0.9rem;
        margin-bottom: 5px;
   `;

	const Values = styled.span`
        font-weight: bold;
   `;

	return (
		<Container>
			<h2>Followers</h2>
			<Followers>
				{props.followers.map(follower => (
					<Follower key={follower.id}>
						<AvatarContainer>
							<Avatar src={follower.avatar_url} alt={follower.avatar_url} key={follower.avatar_url} />
						</AvatarContainer>
						<Atts>
							<Ul>
								<Item>Username: <Values>{follower.login}</Values></Item>
								<Item>ID: <Values>{follower.id}</Values></Item>
								<Item>URL: <Values><a href={follower.html_url}>{follower.html_url}</a></Values></Item>
							</Ul>
						</Atts>
					</Follower>
				))}
			</Followers>
		</Container>

	)
};

export default Followers;