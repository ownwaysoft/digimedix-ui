class LoggedInUserModel {
    constructor(loggedInUserModel?: LoggedInUserModel) {
        this.colorCode = loggedInUserModel == undefined ? "" : loggedInUserModel.colorCode == undefined ? '' : loggedInUserModel.colorCode;
        this.displayName = loggedInUserModel == undefined ? "" : loggedInUserModel.displayName == undefined ? '' : loggedInUserModel.displayName;
        this.email = loggedInUserModel == undefined ? "" : loggedInUserModel.email == undefined ? '' : loggedInUserModel.email;
        this.employeeId = loggedInUserModel == undefined ? "" : loggedInUserModel.employeeId == undefined ? '' : loggedInUserModel.employeeId;
        this.profileImageUrl = loggedInUserModel == undefined ? "" : loggedInUserModel.profileImageUrl == undefined ? '' : loggedInUserModel.profileImageUrl;
        this.roleId = loggedInUserModel == undefined ? "" : loggedInUserModel.roleId == undefined ? '' : loggedInUserModel.roleId;
        this.userId = loggedInUserModel == undefined ? "" : loggedInUserModel.userId == undefined ? '' : loggedInUserModel.userId;
        this.userStatusId = loggedInUserModel == undefined ? undefined : loggedInUserModel.userStatusId == undefined ? undefined : loggedInUserModel.userStatusId;
        this.warehouseId = loggedInUserModel == undefined ? "" : loggedInUserModel.warehouseId == undefined ? '' : loggedInUserModel.warehouseId;
        this.roleName = loggedInUserModel == undefined ? "" : loggedInUserModel.roleName == undefined ? '' : loggedInUserModel.roleName;
    }

    colorCode?: string;
    displayName?: string;
    email?: string;
    employeeId?: string;
    profileImageUrl?: string;
    roleId?: string;
    userId?: string;
    userStatusId?: number = undefined;
    warehouseId?: string;
    roleName ?: string;
}

export { LoggedInUserModel }