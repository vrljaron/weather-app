const weatherCache = {};

export function getCachedCity(city) {
  try {
    const cityData = weatherCache[city?.toLowerCase()];
    if (!cityData) return null;

    const now = Date.now();
    const isFreshData = now - cityData.timestamp * 30 * 60 * 1000;
    return isFreshData ? cityData : null;
  } catch (error) {
    console.error("Cache read error:", error);
    return null;
  }
}

export function setCachedCity(data) {
  try {
    const key = data.city?.toLowerCase();
    if (!key || !data) throw new Error("Missing Key or Data on City:", city);

    weatherCache[data.city.toLowerCase()] = {
      data,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error("Cache write error:", error);
  }
}
