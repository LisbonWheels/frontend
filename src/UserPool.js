import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_qRVlQ86RZ",
  ClientId: "7pb8nac8533lbhkikqn27dmpge",
  // ClientId: "164dumir24613nmmkouu44gop86",
};

export default new CognitoUserPool(poolData);
