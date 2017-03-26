const LOCAL_STORAGE_KEY = "weatherWidgets"
const STORAGE = localStorage

const addToStorage = storage => widgetConfiguration =>
    storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(getWidgetsFromStorage().concat(widgetConfiguration)))

const getStoredWidgets = storage => () =>
{
    const weatherWidgets = storage.getItem(LOCAL_STORAGE_KEY)

    if(weatherWidgets == null) {
        return []
    } else {
        return JSON.parse(weatherWidgets)
    }
}

export const getWidgetsFromStorage = getStoredWidgets(STORAGE)
export const addWidgetToStorage = addToStorage(STORAGE)
