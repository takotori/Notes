export const helpers = {
    'if_eq': function (a: string, b: string, opts: any) {
        if (a === b)
            return opts.fn(this);
        else
            return opts.inverse(this);
    }
}
