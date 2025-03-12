const dummy = (blogs)=> {
    return 1
}
const totalLikes = (blogs) => {
    const total = blogs.reduce((sum , blog) => sum + blog.likes , 0)
    return total
}
const mostPopular = (blogs) => {
    blogs.sort( (a , b) => b.likes - a.likes)
    return blogs[0]
}

module.exports = {dummy , totalLikes , mostPopular}