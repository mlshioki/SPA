import { gql } from '@apollo/client';

export const ADD_POST = gql`
    mutation ADD_POST($image: String!, $text: String!, $userId: uuid!) {
        insert_post(objects: {image: $image, text: $text, user_id: $userId}) {
            affected_rows
        }
    }`;

export const UPDATE_LIKE = gql`
	mutation UPDATE_LIKE($id: uuid!) {
		update_post_by_pk(_inc: { likes: 1 }, pk_columns: { id: $id }) {
			likes
		}
	}
`;