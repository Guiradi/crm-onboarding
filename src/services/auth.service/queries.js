// Packages
import gql from "graphql-tag";
// Apollo
import { apolloClient } from "../graphql";

export const LOGIN = async payload => {
  return await apolloClient.query({
    query: gql`
      query Login($email: String!, $password: String!) {
        Login(email: $email, password: $password) {
          token
          refreshToken
          user {
            name
            email
            company {
              name
            }
            firstLogin
            role {
              key
              permissions {
                key
              }
            }
          }
        }
      }
    `,
    variables: {
      email: payload.email,
      password: payload.password
    },
    errorPolicy: "all",
    fetchPolicy: "network-only"
  });
};
