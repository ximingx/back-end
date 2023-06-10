const PermissionService = require('../service/permission')

const verifyPermission = async (req, res, next) => {
    const {id} = req.user;
    const keyName = Object.keys(req.params)[0]
    const resourceId = req.params[keyName]
    const resourceName = keyName.replace('Id', '')
    const isPermission = await PermissionService.checkResource(resourceName, resourceId, id)
    if (!isPermission) next([400, '权限不足'])
    next()
}

module.exports = verifyPermission
