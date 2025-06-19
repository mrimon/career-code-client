export const applicationPromise = (email) => {
    return fetch(`https://career-code-server-five.vercel.app/applications?email=${email}`)
    .then(res => res.json())
}