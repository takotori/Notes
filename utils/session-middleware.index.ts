export const sessionSettings = (req: any, res: any, next: any) => {
    const settings = req.session?.settings || {orderBy: 'title', orderDirection: -1, theme: true};
    const {orderBy, orderDirection} = req.query;

    if (orderBy) {
        settings.orderBy = orderBy;
    }
    if (orderDirection) {
        settings.orderDirection = orderDirection;
    }
    req.settings = req.session.settings = settings;
    next();
};

export interface Settings {
    theme: boolean
}
