const items = document.getElementById('items') 
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

console.log(images);

const fetchData = async () =>{
  try {
    const res= await fetch("images")
    const data = await res.json(
    console.log(data)
    )
  } catch (error) {
    console.log(error)
  }
}