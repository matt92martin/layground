// PLACE HOLDER ACTION TYPES AND ACTION CREATORS
export const PH_ACTION = 'PH_ACTION'


export function actionSomething(text) {
    return {
        type: PH_ACTION,
        text
    }
}