//https://jsonplaceholder.typicode.com/posts

const cards = document.querySelector(".cards")


const getData = async () => {
    try {

        const request = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await request.json()
        data.forEach(item => {
            const div = document.createElement("div")
            div.setAttribute("class", "card")

            div.innerHTML = `
            <img src="https://img.freepik.com/free-photo/snowman-smiling-in-the-night-winter-celebration-with-decorations-generated-by-artificial-intelligence_188544-93982.jpg" alt="wallpaper" />
            <p>${item.title}</p>
            <p>${item.body}</p>
            `
            cards.append(div)
        })
    } catch (e) {
        console.log(e)
    }
}

getData()