export const sessionSettings = (req: any, res: any, next: any) => {
    const settings = req.session?.settings || {
        orderBy: 'title',
        orderDirection: -1,
        filterCompleted: false,
        theme: true
    };

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
    orderBy: string
    orderDirection: boolean
    filterCompleted: boolean
    theme: boolean
}
