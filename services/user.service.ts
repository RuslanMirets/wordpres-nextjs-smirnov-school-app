import { fetchData } from "@/api/wp-api";
import { IUser } from "@/types/user.interface";

interface ICredentials {
	email: string;
	password: string;
}

export const UserService = {
	async LoginUser(email: string, password: string) {
		const data = await fetchData(`mutation LoginUser {
			login(input: { username: "${email}", password: "${password}" }) {
				user {
					id
					userId
					firstName
					lastName
					username
					email
					avatar {
						url
					}
					roles {
						nodes {
							name
						}
					}
				}
			}
		}	
  `);
		return data;
	},
};
