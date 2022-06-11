import React from "react";

import {useMutation} from "@apollo/client";
import {UserContext} from "../auth";
import {UPDATE_USER} from "../graphql/login/mutation";

export default function EditProfile({ isEditingProfile }) {
	const {currentUser, setCurrentUser} = React.useContext(UserContext);
	const [username, setUsername] = React.useState(currentUser.username);
	const [name, setName] = React.useState(currentUser.name);

	const [updateUser] = useMutation(UPDATE_USER);

	const img = React.useRef();

	if (isEditingProfile) {
		if (!document.getElementById("editingProfile").classList.contains("show")) new window.bootstrap.Modal(document.getElementById("editingProfile")).show();
	}

	async function uploadImage(imagem) {
		const formData = new FormData();
		formData.append("file", imagem);
		formData.append("upload_preset", "senacgram");
		formData.append("cloud_name", "thyagoquintas");
		const response = await fetch("http://api.cloudinary.com/v1_1/thyagoquintas/image/upload", {
			method: "POST",
			accept: "application/json",
			body: formData,
		});
		const bodyJson = await response.json();
		return bodyJson.url;
	}

	async function handleEditProfile() {
		let url = await uploadImage(img.current.files[0]);

		updateUser({variables: {id: currentUser.id, username, name, image: url}}).then((res) => {
			setCurrentUser(res.data.insert_user.returning[0]);
		});
	}

	return (
		<div className="modal" id="editingProfile" tabIndex="-1">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Editar perfil</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<input value={username} type="text" onChange={(event) => setUsername(event.target.value)} placeholder="Username" className="form-control my-2" />
						<input value={name} type="text" onChange={(event) => setName(event.target.value)} placeholder="Name" className="form-control my-2" />
						<input type="file" className="form-control my-2" ref={img} />
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
						<button type="button" className="btn btn-primary" onClick={handleEditProfile}>Salvar</button>
					</div>
				</div>
			</div>
		</div>
	);
}
