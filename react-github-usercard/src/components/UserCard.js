import React from 'react';
import styled from "styled-components";

const UserCard = (props) => {
	const UserCard = styled.div`
         width: 50%;
         display: flex;
         flex-direction: column;
         align-items: center;
         margin: 5px 25% 5px 25%;
         background: cadetblue;
         color: white;
         border: 2px solid white;
         border-radius: 2%;
   `;

	const Name = styled.h3`
        font-size: 1.6rem;
        margin-bottom: 5px;
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
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5px;
   `;

	const Ul = styled.ul`
        list-style: none;
   `;

	const Item = styled.li`
        font-size: 1.2rem;
        margin-bottom: 5px;
    `;

	const Values = styled.span`
        font-weight: bold;
    `;

	return (
		<UserCard>
			<Name>{props.user.name}</Name>
			<AvatarContainer>
				<Avatar src={props.user.avatar_url} alt={props.user.avatar_url} key={props.user.avatar_url} />
			</AvatarContainer>
			<Atts className='user-data'>
				<Ul>
					<Item>Username: <Values>{props.user.login}</Values></Item>
					<Item>ID: <Values>{props.user.id}</Values></Item>
					<Item>URL: <Values><a href={props.user.html_url}>{props.user.html_url}</a></Values></Item>
					<Item>Repos: <Values>{props.user.public_repos}</Values></Item>
					<Item>Followers: <Values>{props.user.followers}</Values></Item>
					<Item>Following: <Values>{props.user.following}</Values></Item>
				</Ul>
			</Atts>
		</UserCard>
	)
};

export default UserCard;