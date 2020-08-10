// Graphql
import * as Query from "./queries";

export const makeLogin = async payload => {
  try {
    const response = await Query.LOGIN(payload);
    console.log(response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
