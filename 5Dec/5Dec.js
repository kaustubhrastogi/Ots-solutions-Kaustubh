const value = window.prompt("Please enter your age")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(value>=18?"you are an Adult" : `you are underage: ${18-value}`)
