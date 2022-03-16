export const isEmpty = obj => {
    const include = [Object, Array].includes((obj || {}).constructor)
    const notEntries = !Object.entries((obj || {})).length;

    return include && notEntries
}