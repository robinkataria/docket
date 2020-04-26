// You can use date.js in homepage Title(Today).
// module.exports = "Hello World!"

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
