module.exports = async (d) => {
let [index = 1] = d.data.splits
index = Number (index) - 1
if (isNaN(index) || index < 0) return d.sendError(d, "your provided mention args should be number and more than or equal to 1"); 
return [...d.mentions?.users.values()][index]?.id || ""
}
