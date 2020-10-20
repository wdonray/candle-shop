import * as AWS from "aws-sdk";
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
  region: "us-east-1",
});
const USER_POOL_ID = "us-east-1_DrxbNy8wD";
const ssmClient = new AWS.SecretsManager({ region: "us-east-1" });

export const getStripeKey = async () => {
  try {
    const resp = ssmClient
      .getSecretValue({ SecretId: "dev/candleShop/stripeKey" })
      .promise();
    const key = (await resp).SecretString;
    return JSON.parse(key);
  } catch (err) {
    console.log({ Seceret: err });
  }
};

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username,
  };
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const { id, cart, total, address, token } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);
    const stripeKey = await getStripeKey();
    const stripe = require("stripe")(stripeKey);
    await stripe.charges.create({
      amount: total * 100,
      currency: "usd",
      source: token,
      description: `Order ${new Date()} by ${email}`,
    });
    return { id, cart, total, address, username, email };
  } catch (err) {
    throw new Error(err);
  }
};
