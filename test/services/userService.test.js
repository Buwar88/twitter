const UserService = require('./../../app/services/userService')

describe("Tests for user sevice", () => {
    test("1) Create a new user using the UserService", ()=> {
        const user = UserService.create(1, "irvingjaramillo", "Irving")
        expect(user.username).toBe("irvingjaramillo"),
        expect(user.name).toBe("Irving"),
        expect(user.id).toBe(1),
        expect(user.bio).not.toBeUndefined()
    });
    test("2) Get all user data in a list", () => {
        const user = UserService.create(1, "irvingjaramillo", "Irving")
        const userInfoList = UserService.getInfo(user)
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("irvingjaramillo")
        expect(userInfoList[2]).toBe("Irving")
        expect(userInfoList[3]).toBe("Sin bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1, "irvingjaramillo", "Irving")
        UserService.updateUserUsername(user, "irvingjaramillo")
        expect(user.username).toBe("irvingjaramillo")
    })
    
    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "irvingjaramillo1", "Irving")
        const user2 = UserService.create(1, "irvingjaramillo2", "Irving")
        const user3 = UserService.create(1, "irvingjaramillo3", "Irving")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("irvingjaramillo1")
        expect(usernames).toContain("irvingjaramillo2")
        expect(usernames).toContain("irvingjaramillo3")
    })
    
})