const User = require('./../../app/models/user')

describe("Test twitter", () => {
    test('Create an user object', () => {
        const user = new User(1, "irvingjaramillo", "Irving", "Bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("irvingjaramillo")
    expect(user.name).toBe("Irving")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()

})

});

test('Add getters', () => {
    const user = new User(1, "irvingjaramillo", "Irving", "Bio")
    expect(user.getUsername).toBe("irvingjaramillo")
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
});

test('Add setters', () => {
    const user = new User(2, "adanjaramillo", "Adan", "Bio")
    user.setUsername = "Irving"
    expect(user.username).toBe("Irving")

    user.setBio = "New Bio"
    expect(user.bio).toBe("New Bio")
});

