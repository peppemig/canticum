import { setLoading, setError, setIsOpen } from "../slices/mobilePlayerOpen"
import {} from "../slices/mobilePlayerOpen"

export const setIsMobilePlayerOpen = (bool) => (dispatch) => {
    dispatch(setLoading(true))
    try {
        const boolState = bool
        dispatch(setIsOpen(bool))
    } catch (error) {
        dispatch(setError(error))
    }
}