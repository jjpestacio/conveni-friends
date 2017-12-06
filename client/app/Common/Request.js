//struct for request
export default class Request {
    constructor(userId, title, description, latitude, 
    longitude, address, timeStart, timeEnd) {
        this.userId = userId,
        this.title = title,
        this.description = description,
        this.latitude = latitude,
        this.longitude = longitude,
        this.address = address,
        this.timeStart = timeStart,
        this.timeEnd = timeEnd
    }
}