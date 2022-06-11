import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation ADD_USER($name: String!, $password: String!, $username: String!) {
        insert_user(objects: {name: $name, password: $password, username: $username}) {
            returning {
                id
                name
                username
            }
        }
    }`;

    
export const UPDATE_USER = gql`
	mutation UPDATE_USER($id: uuid!, $name: String!, $username: String!, $image: String!) {
		update_user_by_pk(pk_columns: { id: $id }, _set: { name: $name, username: $username, image: $image }) {
			id
			name
			username
			image
		}
	}
`;