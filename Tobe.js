var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

// Example 1
try {
    const result = expect(5).toBe(5);
    console.log({ value: result }); // { value: true }
} catch (e) {
    console.log({ error: e.message });
}

// Example 2
try {
    const result = expect(5).toBe(null);
    console.log({ value: result });
} catch (e) {
    console.log({ error: e.message }); // { error: "Not Equal" }
}

// Example 3
try {
    const result = expect(5).notToBe(null);
    console.log({ value: result }); // { value: true }
} catch (e) {
    console.log({ error: e.message });
}
