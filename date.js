exports.getDate = () => {
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-IN", options);
};

exports.getDay = () => {
    const today = new Date();
    const options = { weekday: "long" };
    return today.toLocaleDateString("en-IN", options);
};

// module.exports = "Hello World!"
// You can use date.js in homepage Title(Today).
