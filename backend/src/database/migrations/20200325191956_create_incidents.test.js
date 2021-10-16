const _20200325191956_create_incidents = require("./20200325191956_create_incidents")
// @ponicode
describe("_20200325191956_create_incidents.up", () => {
    test("0", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.up({ schema: { createTable: () => "bc23a9d531064583ace8f67dad60f6bb" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.up({ schema: { createTable: () => "c466a48309794261b64a4f02cfcc3d64" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.up({ schema: { createTable: () => 12345 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.up({ schema: { createTable: () => "da7588892" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.up({ schema: { createTable: () => 9876 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.up(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("_20200325191956_create_incidents.down", () => {
    test("0", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.down({ schema: { dropTable: () => "Harbors" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.down({ schema: { dropTable: () => "Extensions" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.down({ schema: { dropTable: () => "Lights" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.down({ schema: { dropTable: () => "Port" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.down({ schema: { dropTable: () => "Expressway" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            _20200325191956_create_incidents.down(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
