export class AgentLoginModel {
  constructor(agentLoginModel?: AgentLoginModel) {
    this.extension = agentLoginModel == undefined ? null : agentLoginModel.extension == undefined ? null : agentLoginModel.extension;
    this.password = agentLoginModel == undefined ? "" : agentLoginModel.password == undefined ? "" : agentLoginModel.password;
    this.userId = agentLoginModel == undefined ? "" : agentLoginModel.userId == undefined ? "" : agentLoginModel.userId;
  }
  extension: number;
  password: string;
  userId: string;
}