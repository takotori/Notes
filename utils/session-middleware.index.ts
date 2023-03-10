export const sessionUserSettings = (req: any, res: any, next: any) => {
    const userSettings = req.session?.userSettings || {orderBy: 'title', orderDirection: -1};
    const {orderBy, orderDirection} = req.query;

    if (orderBy) {
        userSettings.orderBy = orderBy;
    }
    if (orderDirection) {
        userSettings.orderDirection = orderDirection;
    }
    req.userSettings = req.session.userSettings = userSettings;
    next();
};

export class Settings {
    // todo: kinda empty settings
}
