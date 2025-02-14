declare const PROD: boolean | undefined

export const version = '3.1.2 February 1 2025: The Events Update'

/**
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 */
// eslint-disable-next-line
export const testing: boolean = false;
export const lastUpdated = new Date(Date.UTC(2024, 4, 28, 16, 0, 6))
/**
 * CHANGE THIS ONE INSTEAD
 */
export const prod = typeof PROD === 'undefined' ? false : PROD
